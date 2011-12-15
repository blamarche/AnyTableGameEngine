
//global vars for the game engine
var boardSettings = null;
var boardAddables = null;
var activePieces = [];
var addablePieces = {};
var canvas = null, moveTapeObj = null, board = null, actionGuiObj = null, selectedPiece = null;

//game functions
function removePieceFromBoard( piece )
{
	board.removeChild(piece);
	for (var i=0; i<activePieces.length; i++)
	{
		if (activePieces[i]==piece)
		{
			activePieces.splice(i, 1);
			return true;
		}
	}
	
	return false;
}

function addPieceToBoard( name )
{
	var piece = addablePieces[name];
	if (typeof piece != "undefined" && piece!=null)
	{
		var newpiece = piece.clone();
		if (newpiece.x==-1 && newpiece.y==-1)
		{
			newpiece.x = canvas.mouse.x - board.x;
			newpiece.y = canvas.mouse.y - board.y;
		}
		board.addChild(newpiece);
		activePieces.push(newpiece);
		
		newpiece.zIndex = "front";
		
		setPieceEvents(newpiece);
	}
}

function getBoardJSON(incrementTurn)
{
	var pieceArray = [];

	for (var i=0; i<activePieces.length; i++)
	{
		var piece = activePieces[i];
		pieceArray.push({ 
			"name": piece._atge_name,
			"image_url": piece._atge_image,
			"rotation": piece.rotation,
			"user_removable": piece._atge_removable,
			"position": [ piece.x, piece.y ],
			"z_index": piece.zIndex
		 });
	}

	var json = {
		"settings": boardSettings,
		"addable_pieces": boardAddables,
		"active_pieces": pieceArray
	};
	
	if (incrementTurn)
		json.settings.turn_number += 1;
	
	var result = JSON.stringify(json);
	
	//reset turn in current settings var
	if (incrementTurn)
		json.settings.turn_number -= 1;
	
	return result;
}


function loadBoard( jsonObj )
{
	//create gui object for piece interaction
	initActionGuiObj();
	
	//create move 'tape' object to show relative piece movement length
	moveTapeObj = canvas.display.line({
		start: { x: 0, y: 0 },
		end: { x: 1, y: 1 },
		stroke: "5px #f00",
		cap: "round",
		opacity: 0.35
	});
	
	//reset board if exists
	if (board != null)
	{
		canvas.removeChild(board);
		board = null;
	}
	
	//set global vars for this board
	boardSettings = jsonObj.settings;
	boardAddables = jsonObj.addable_pieces;
	
	//create parent board
	board = canvas.display.image({
		x: 0,
		y: 0,
		origin: { x: "left", y: "top" },
		shadow: jsonObj.settings.board_shadow,
		image: jsonObj.settings.board_image_url
	});
	
	//setup board event bindings
	board.dragAndDrop({
		start: function () {
			if (selectedPiece!=null)
			{
				canvas.removeChild(actionGuiObj);
				selectedPiece = null;
			}
			this.shadow = boardSettings.board_interact_shadow;
		},
		move: function () {	},
		end: function () {
			this.shadow = boardSettings.board_shadow;
		}
	});
	
	//create pieces on the board	
	for (var i=0; i<jsonObj.active_pieces.length; i++)
	{
		var piece = canvas.display.image({
			x: jsonObj.active_pieces[i].position[0],
			y: jsonObj.active_pieces[i].position[1],
			origin: { x: "center", y: "center" },
			shadow: jsonObj.settings.piece_shadow,
			image: jsonObj.active_pieces[i].image_url
		});
		
		activePieces.push(piece);
		
		board.addChild(piece);
		
		piece.zIndex = jsonObj.active_pieces[i].z_index;
		piece._atge_removable = jsonObj.active_pieces[i].user_removable;
		piece._atge_name = jsonObj.active_pieces[i].name;
		piece._atge_image = jsonObj.active_pieces[i].image_url;
		
		setPieceEvents(piece);
	}
	
	//create 'clone-able' pieces
	for (var i=0; i<jsonObj.addable_pieces.length; i++)
	{
		var piece = canvas.display.image({
			x: jsonObj.addable_pieces[i].position[0],
			y: jsonObj.addable_pieces[i].position[1],
			origin: { x: "center", y: "center" },
			shadow: jsonObj.settings.piece_shadow,
			image: jsonObj.addable_pieces[i].image_url
		});
		
		addablePieces[ jsonObj.addable_pieces[i].name ] = piece;
		piece._atge_removable = jsonObj.addable_pieces[i].user_removable;
		piece._atge_name = jsonObj.addable_pieces[i].name;
		piece._atge_image = jsonObj.addable_pieces[i].image_url;
	}
	
	/*
	board.bind("click tap", function(ev) { 
		if (ev.which == 2)
			board.scale(1.5,1.5);
	});
	*/
	
	//add the finished game board to the canvas
	canvas.addChild(board);
	
}

function initActionGuiObj()
{
	//create base gui objects
	actionGuiObj = canvas.display.image({
		x: 0,
		y: 0,
		origin: { x: "top", y: "left" },
		shadow: "3 3 10 #000",
		image: "../images/gui_piece_center.png"
	});
	
	var remove = canvas.display.image({
		x: 0,
		y: 15,
		origin: { x: "top", y: "left" },
		shadow: "3 3 10 #005",
		image: "../images/gui_piece_remove.png"
	});
	
	var rotate = canvas.display.image({
		x: 20,
		y: 15,
		origin: { x: "top", y: "left" },
		shadow: "3 3 10 #005",
		image: "../images/gui_piece_rotate.png"
	});
	
	actionGuiObj.addChild(remove);
	actionGuiObj.addChild(rotate);
	
	//HACK : ZINDEX DOES NOT WORK CORRECTLY WITH BIND CLICK TAP, SO USING DRAGSTART
	remove.dragAndDrop({ start: function() {
		console.log("remove");
		this.dragging=false;
		if (selectedPiece!=null)
		{
			canvas.removeChild(actionGuiObj);
			
			selectedPiece.fadeOut(100, "linear", function () {
				removePieceFromBoard(this);
			});
			
			selectedPiece = null;
		}
	}});
	
	rotate.dragAndDrop({ start: function() {
		console.log("rotate");
		this.dragging=false;
		if (selectedPiece!=null)
		{
			//selectedPiece.animate({rotation: selectedPiece.rotation+45}, 100, "linear");
			selectedPiece.rotation += 45;
		}
	}});
}

function setPieceEvents(piece)
{
	piece.dragAndDrop({
		start: function () {
			//apply visual styles and show line
			this.shadow = boardSettings.piece_interact_shadow;
			this.scale(boardSettings.piece_interact_scale, boardSettings.piece_interact_scale);
			this.opacity = boardSettings.piece_interact_opacity;
			
			if (boardSettings.show_move_line)
			{
				moveTapeObj.end = {x: this.x, y: this.y};
				moveTapeObj.start = {x: this.x, y: this.y};
				board.addChild(moveTapeObj);
			}
			
			this.zIndex = "front";
			
			if (boardSettings.show_move_line)
				moveTapeObj.zIndex = "front";
			
			//show/hide action gui if applicable
			if (this != selectedPiece)
			{
				if (selectedPiece != null)
				{
					canvas.removeChild(actionGuiObj);
				}
				selectedPiece = this;
				canvas.addChild(actionGuiObj);
				actionGuiObj.x = board.x+this.x-this.width/2;
				actionGuiObj.y = board.y+this.y+this.height/2;
			}
			else
			{
				selectedPiece = null;
				canvas.removeChild(actionGuiObj);
			}
		},
		move: function () {	
			moveTapeObj.end = {x: this.x, y: this.y};
			
			//hide action gui since user is moving the piece
			if (this == selectedPiece)
			{
				selectedPiece = null;
				canvas.removeChild(actionGuiObj);
			}
		},
		end: function () {
			this.shadow = boardSettings.piece_shadow;
			this.scale(1.0, 1.0);
			this.opacity = 1.0;
			
			if (boardSettings.show_move_line)
				board.removeChild(moveTapeObj);
		}
	});
}