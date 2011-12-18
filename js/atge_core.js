
//global vars for the game engine
var boardSettings = null;
var boardAddables = null;
var activePieces = [];
var addablePieces = {};
var director, canvas, moveTapeObj, board = null, actionGuiObj, selectedPiece = null, menuButton = null;

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
		var newpiece = new CAAT.ActorContainer()
		                .setBackgroundImage(piece.backgroundImage,true)
		                .centerAt(piece.x, piece.y)
		                .setRotation(piece.rotationAngle);
		
		/*
		var piece = canvas.display.image({
			x: jsonObj.active_pieces[i].position[0],
			y: jsonObj.active_pieces[i].position[1],
			origin: { x: "center", y: "center" },
			shadow: jsonObj.settings.piece_shadow,
			image: jsonObj.active_pieces[i].image_url,
			rotation: jsonObj.active_pieces[i].rotation
		});
		*/
	
		newpiece._atge_removable = piece._atge_removable;
		newpiece._atge_name = piece._atge_name;
		newpiece._atge_image = piece._atge_image;
		
		if (newpiece.x<0 && newpiece.y<0)
		{
			newpiece.centerAt(board.width/2, board.height/2);
		}
		board.addChild(newpiece);
		activePieces.push(newpiece);
		
		board.setZOrder(newpiece,99999);
		
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


function createMenu()
{
	var holder = $("#addables");
	holder.html("");
	
	for (var piecename in addablePieces)
	{	
		var piece = addablePieces[piecename];
		var entry = $("<div></div>");
		entry.attr("class", "addpiece");
		entry.attr("piecename", piece._atge_name);
		entry.attr("title", piece._atge_name);
		entry.append('<img src="'+piece._atge_image+'" />');
		
		holder.append(entry);
	}
	
	$(".addpiece").click(function(ev) {
		hideMenu();
		addPieceToBoard($(this).attr("piecename"));
	});
}

function showMenu()
{
	$("#menu").animate({ width: "250px" }, 200, function() {
		//BUG : This just doesnt seem to work right on android, after rotation, sometimes works?
		$("#menuScroll").touchScroll();
	});
}

function hideMenu() 
{
	$("#menu").animate({ width: "1px" }, 200);
}

function loadBoard( jsonObj )
{
	//menu button
	if (menuButton == null)
	{
        var menuimg = getAndLoadImage("../images/gui_menu_button.png");
		menuButton = new CAAT.ActorContainer().setBackgroundImage(menuimg,true);
		
		/*
		menuButton = canvas.display.image({
			x: 0,
			y: canvas.height,
			origin: { x: "left", y: "bottom" },
			shadow: "2 2 2 #000",
			image: "../images/gui_menu_button.png"
		});
		*/
		
		canvas.addChild(menuButton);
		
		menuButton.mouseDown=function(){
		    showMenu();
		}
		
		$("#hide_menu").click(hideMenu);
		
		//HACK : touch-scroll plugin issue?
		$("#menu").height(canvas.height);
	}
	
	//create gui object for piece interaction
	initActionGuiObj();
	
	//create move 'tape' object to show relative piece movement length
    var path = new CAAT.LinearPath().setInitialPosition(0,0).setFinalPosition(1,1);
    path.color = "rgba(255,0,0,0.5)"; //HACK - this should be better
	moveTapeObj = new CAAT.PathActor().setPath(path).setStrokeStyle("rgba(255,0,0,0.5)");
	
	/*
	moveTapeObj = canvas.display.line({
		start: { x: 0, y: 0 },
		end: { x: 1, y: 1 },
		stroke: "5px #f00",
		cap: "round",
		opacity: 0.35
	});
	*/
	
	//reset board if exists
	if (board != null)
	{
		canvas.removeChild(board);
		board = null;
	}
	
	//set global vars for this board
	boardSettings = jsonObj.settings;
	boardAddables = jsonObj.addable_pieces;
	
	//html elements
	$("#notes").html(boardSettings.notes);
	$("#rolls").html(boardSettings.rolls);
	$("#chat").html(boardSettings.chat);
	$("#turn").html(boardSettings.turn_number);
	
	//create parent board
	var boardimg = getAndLoadImage(jsonObj.settings.board_image_url);
    board = new CAAT.ActorContainer().setBackgroundImage(boardimg,true);
	
	//setup board event bindings
	enableBasicDrag(board, false, {
		start: function () {
			hideMenu();
			if (selectedPiece!=null)
			{
				canvas.removeChild(actionGuiObj);
				selectedPiece = null;
			}
			//this.shadow = boardSettings.board_interact_shadow;
		},
		move: function () { },
		end: function () {
		    //this.shadow = boardSettings.board_shadow;
		}
	}, true);
	
	//create pieces on the board	
	for (var i=0; i<jsonObj.active_pieces.length; i++)
	{
		var img = getAndLoadImage(jsonObj.active_pieces[i].image_url);
		
		var piece = new CAAT.ActorContainer()
		                .setBackgroundImage(img,true)
		                .centerAt(jsonObj.active_pieces[i].position[0], jsonObj.active_pieces[i].position[1])
		                .setRotation(jsonObj.active_pieces[i].rotation);
		
		/*
		var piece = canvas.display.image({
			x: jsonObj.active_pieces[i].position[0],
			y: jsonObj.active_pieces[i].position[1],
			origin: { x: "center", y: "center" },
			shadow: jsonObj.settings.piece_shadow,
			image: jsonObj.active_pieces[i].image_url,
			rotation: jsonObj.active_pieces[i].rotation
		});
		*/
		
		activePieces.push(piece);
		
		board.addChild(piece);
		
		board.setZOrder(piece, jsonObj.active_pieces[i].z_index);
		piece._atge_removable = jsonObj.active_pieces[i].user_removable;
		piece._atge_name = jsonObj.active_pieces[i].name;
		piece._atge_image = jsonObj.active_pieces[i].image_url;
		
		setPieceEvents(piece);
	}
	
	//create 'clone-able' pieces
	for (var i=0; i<jsonObj.addable_pieces.length; i++)
	{
		/*
		var piece = canvas.display.image({
			x: jsonObj.addable_pieces[i].position[0],
			y: jsonObj.addable_pieces[i].position[1],
			origin: { x: "center", y: "center" },
			shadow: jsonObj.settings.piece_shadow,
			image: jsonObj.addable_pieces[i].image_url,
			rotation: jsonObj.addable_pieces[i].rotation
		});
		*/
		
		var img = getAndLoadImage(jsonObj.addable_pieces[i].image_url);
		
		var piece = new CAAT.ActorContainer()
		                .setBackgroundImage(img,true)
		                .centerAt(jsonObj.addable_pieces[i].position[0], jsonObj.addable_pieces[i].position[1])
		                .setRotation(jsonObj.addable_pieces[i].rotation);
						
		addablePieces[ jsonObj.addable_pieces[i].name ] = piece;
				
		board.setZOrder(piece, jsonObj.addable_pieces[i].z_index);
		piece._atge_removable = jsonObj.addable_pieces[i].user_removable;
		piece._atge_name = jsonObj.addable_pieces[i].name;
		piece._atge_image = jsonObj.addable_pieces[i].image_url;
		
		setPieceEvents(piece);
	}
	
	
	//create menu
	createMenu();
	
	//add the finished game board to the canvas
	canvas.addChild(board);
	
	canvas.setZOrder(menuButton,99999);
}

function initActionGuiObj()
{		
	actionGuiObj = new CAAT.ActorContainer();
	actionGuiObj.setBounds(0,0,32,16);
	
	var removeimg = getAndLoadImage("../images/gui_piece_remove.png");		
	var remove = new CAAT.ActorContainer()
	                .setBackgroundImage(removeimg,true)
	                .setLocation(0,2);
	                
	var rotimg = getAndLoadImage("../images/gui_piece_rotate.png");		
	var rotate = new CAAT.ActorContainer()
	                .setBackgroundImage(rotimg,true)
	                .setLocation(17,2);
	
	actionGuiObj.addChild(remove);
	actionGuiObj.addChild(rotate);
	
	remove.mouseClick = function(m) {
		if (selectedPiece!=null && selectedPiece._atge_removable)
		{
			canvas.removeChild(actionGuiObj);
			
			//selectedPiece.fadeOut(100, "linear", function () {
				removePieceFromBoard(selectedPiece);
			//});
			
			selectedPiece = null;
		}
	};
	
	rotate.mouseClick = function(m) {
		if (selectedPiece!=null)
		{
			selectedPiece.setRotation(selectedPiece.rotationAngle+Math.PI/4);
		}
	};
}

function setPieceEvents(piece)
{
    enableBasicDrag(piece, true, {
		start: function () {
			hideMenu();
			
			//apply visual styles and show line
			//this.shadow = boardSettings.piece_interact_shadow;
			this.setAlpha(boardSettings.piece_interact_opacity);
			this.setScale(boardSettings.piece_interact_scale, boardSettings.piece_interact_scale);
			
			
			if (boardSettings.show_move_line)
			{
				moveTapeObj.getPath().setInitialPosition(this.x+this.width/2, this.y+this.width/2);
				moveTapeObj.getPath().setFinalPosition(this.x+this.width/2, this.y+this.width/2);
				board.addChild(moveTapeObj);
			}
						
			board.setZOrder(this,99999);
						
			if (boardSettings.show_move_line)
				board.setZOrder(moveTapeObj,99999);
						
			//show/hide action gui if applicable
			if (this != selectedPiece)
			{
				if (selectedPiece != null)
				{
					canvas.removeChild(actionGuiObj);
				}
				selectedPiece = this;
				canvas.addChild(actionGuiObj);
				actionGuiObj.x = board.x+this.x;
				actionGuiObj.y = board.y+this.y+this.height;
			}
			else
			{
				selectedPiece = null;
				canvas.removeChild(actionGuiObj);
			}
			
		},
		move: function () {	
			
			moveTapeObj.getPath().setFinalPosition(this.x+this.width/2, this.y+this.width/2);
			
			//hide action gui since user is moving the piece
			if (this == selectedPiece)
			{
				selectedPiece = null;
				canvas.removeChild(actionGuiObj);
			}
			
		},
		end: function () {
            this.setScale(1,1);
            this.setAlpha(1);
			/*
			this.shadow = boardSettings.piece_shadow;
			*/
			if (boardSettings.show_move_line)
				board.removeChild(moveTapeObj);				
		}
	});

}


//CAAT UTILS
function enableBasicDrag(obj, allowRotation, handlersObj, disableCursorChange)
{
    obj.enableDrag();
    obj._atge_mouseDrag = obj.mouseDrag;
    obj._atge_mouseUp = obj.mouseUp;
    obj._atge_mouseDown = obj.mouseDown;
    
    obj._atge_mouseDragN = handlersObj.move;
    obj._atge_mouseUpN = handlersObj.end;
    obj._atge_mouseDownN = handlersObj.start;
	
	if (disableCursorChange)
	{
	    obj._atge_mouseEnter = obj.mouseEnter;
	    obj.mouseEnter = function(mouseEvent) {
	        obj._atge_mouseEnter(mouseEvent);
	        CAAT.setCursor('default');
	    };
	}
	
	//start
	if (handlersObj && handlersObj.start)
	{
	    obj.mouseDown = function(mouseEvent) {
            this._atge_mouseDownN(mouseEvent);
            if (this._atge_mouseDown)
                this._atge_mouseDown(mouseEvent);
        };
	}
	
	//end
	if (handlersObj && handlersObj.end)
	{
	    obj.mouseUp = function(mouseEvent) {
            this._atge_mouseUpN(mouseEvent);
            if (this._atge_mouseUp)
                this._atge_mouseUp(mouseEvent);
        };
	}
		
    //move
    if (allowRotation)
    {
        obj.mouseDrag = function(mouseEvent) {
            if (this._atge_mouseDragN)
                this._atge_mouseDragN(mouseEvent);
            
            if (!mouseEvent.isShiftDown())
            {
                 this._atge_mouseDrag(mouseEvent);   
            }
        };
    }
    else
    {
        obj.mouseDrag = function(mouseEvent) {
            if (this._atge_mouseDragN)
                this._atge_mouseDragN(mouseEvent);
                
            if (!mouseEvent.isShiftDown() && !mouseEvent.isControlDown())
            {
                 this._atge_mouseDrag(mouseEvent);   
            }
        };
    }
}

function getAndLoadImage(imageurl)
{
    var img = $('<img src="'+imageurl+'" />');
    $(director.canvas).append(img);
    return img[0];
}

