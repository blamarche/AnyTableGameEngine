//global vars for the game engine
var boardSettings = null;
var boardAddables = null;
var activePieces = [];
var addablePieces = {};
var canvas, moveTapeObj, board = null, actionGuiObj, selectedPiece = null, menuButton = null;

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
			newpiece.x = board.getChildAt(0).image.width/2;//canvas.mouse.x - board.x;
			newpiece.y = board.getChildAt(0).image.height/2;//canvas.mouse.y - board.y;
		}
		board.addChild(newpiece);
		activePieces.push(newpiece);
		
		newpiece._atge_removable = piece._atge_removable;
		newpiece._atge_name = piece._atge_name;
		newpiece._atge_image = piece._atge_image;
		
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
			"z_index": 0 //piece.zIndex TODO : Fix z-indexing
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
		console.log($(this).attr("piecename"));
		hideMenu();
		addPieceToBoard($(this).attr("piecename"));
	});
}

function showMenu()
{
	$("#menu").animate({ width: "250px" }, 200, function() {
		//TODO : BUG : This just doesnt seem to work right on android, after rotation, sometimes works?
		$("#menuScroll").touchScroll();
	});
}

function hideMenu() 
{
	$("#menu").animate({ width: "1px" }, 200);
}

function loadBoard( jsonObj )
{
    canvas.enableMouseOver();

	//menu button
	if (menuButton == null)
	{
		menuButton = new Bitmap("../images/gui_menu_button.png");
		menuButton.x = 0;
		menuButton.y = 0;
		menuButton.shadow = createShadowFromString("2 2 2 #000");
		
		canvas.addChild(menuButton);
		
		menuButton.onClick = function(evt) {
		    showMenu();
		};
		
		$("#hide_menu").click(hideMenu);
		
		//HACK : touch-scroll plugin issue?
		$("#menu").height(canvas.height);
	}
	
	//create gui object for piece interaction
	initActionGuiObj();
	
	//create move 'tape' object to show relative piece movement length
	moveTapeObj = new Shape();
	
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
	board = new Container();
	board.addChild(new Bitmap(jsonObj.settings.board_image_url));
	board.shadow = createShadowFromString(jsonObj.settings.board_shadow);
		
	//setup board event bindings
    enableBasicDrag(board.getChildAt(0), {
		start: function () {
			hideMenu();
			if (selectedPiece!=null)
			{
				canvas.removeChild(actionGuiObj);
				selectedPiece = null;
			}
			this.shadow = createShadowFromString(boardSettings.board_interact_shadow);
			
		},
		move: function () {	},
		end: function () {
			this.shadow = createShadowFromString(boardSettings.board_shadow);
		}
	}, true);
	
	//create pieces on the board	
	for (var i=0; i<jsonObj.active_pieces.length; i++)
	{
		var piece = createPieceBitmap(jsonObj.active_pieces[i].image_url);
		piece.x = jsonObj.active_pieces[i].position[0];
		piece.y = jsonObj.active_pieces[i].position[1];
		piece.rotation= jsonObj.active_pieces[i].rotation;
		piece.shadow = createShadowFromString(jsonObj.settings.piece_shadow);
		
		activePieces.push(piece);
		
		board.addChild(piece);
		
		//piece.zIndex = jsonObj.active_pieces[i].z_index;
		piece._atge_removable = jsonObj.active_pieces[i].user_removable;
		piece._atge_name = jsonObj.active_pieces[i].name;
		piece._atge_image = jsonObj.active_pieces[i].image_url;
		
		setPieceEvents(piece);
	}
	
	//create 'clone-able' pieces
	for (var i=0; i<jsonObj.addable_pieces.length; i++)
	{
	    var piece = createPieceBitmap(jsonObj.addable_pieces[i].image_url);
		piece.x = jsonObj.addable_pieces[i].position[0];
		piece.y = jsonObj.addable_pieces[i].position[1];
		piece.rotation= jsonObj.addable_pieces[i].rotation;
	    piece.shadow = createShadowFromString(jsonObj.settings.piece_shadow);
		
		addablePieces[ jsonObj.addable_pieces[i].name ] = piece;
		piece._atge_removable = jsonObj.addable_pieces[i].user_removable;
		piece._atge_name = jsonObj.addable_pieces[i].name;
		piece._atge_image = jsonObj.addable_pieces[i].image_url;
	}
	
	//create menu
	createMenu();
	
	//add the finished game board to the canvas
	canvas.addChild(board);
	
	canvas.addChild(menuButton); //zindex
}

function initActionGuiObj()
{
    actionGuiObj = new Container();
    
	var remove = new Bitmap("../images/gui_piece_remove.png");
	remove.y=2;
	remove.shadow = createShadowFromString("3 3 10 #005");
	
	var rotate = new Bitmap("../images/gui_piece_rotate.png");
	rotate.x=17
	rotate.y=2;
	rotate.shadow = createShadowFromString("3 3 10 #005");
	
	actionGuiObj.addChild(remove);
	actionGuiObj.addChild(rotate);
	actionGuiObj._atge_remove = remove;
	actionGuiObj._atge_rotate = rotate;
	
	remove.onClick = function(evt) {
	    if (selectedPiece!=null && selectedPiece._atge_removable)
		{
			canvas.removeChild(actionGuiObj);
			
			Tween.get(selectedPiece).to({alpha: 0, 
			                    scaleX: 0.5, 
			                    scaleY: 0.5},200).call(function() {
			                        removePieceFromBoard(selectedPiece);
			                    });
            selectedPiece = null;
		}
	};
	
	rotate.onClick = function(evt) {
	    if (selectedPiece!=null)
		{
			if (!selectedPiece.tweenjs_count)
			    Tween.get(selectedPiece).to({rotation: selectedPiece.rotation+45},100);
			//selectedPiece.rotation += 45;
		}
	};
}

function setPieceEvents(piece)
{
    enableBasicDrag(piece, {
		start: function () {
			hideMenu();
			
			//apply visual styles and show line
			this.shadow = createShadowFromString(boardSettings.piece_interact_shadow);
			Tween.get(this).to({alpha: boardSettings.piece_interact_opacity, 
			                    scaleX: boardSettings.piece_interact_scale, 
			                    scaleY: boardSettings.piece_interact_scale},200);//.call(onComplete).play(nextTween);
			
			
			board.addChild(this); //zindex
			
			if (boardSettings.show_move_line)
			{
				moveTapeObj.graphics.clear();
				moveTapeObj._sx = this.x;
				moveTapeObj._sy = this.y;
				board.addChild(moveTapeObj);
			}
			
			//show/hide action gui if applicable
			if (this != selectedPiece)
			{
				
				if (selectedPiece != null)
				{
					canvas.removeChild(actionGuiObj);
				}
				selectedPiece = this;
                actionGuiObj._atge_remove.visible = selectedPiece._atge_removable;
				canvas.addChild(actionGuiObj);
				actionGuiObj.x = board.x+this.x-this.regX;
				actionGuiObj.y = board.y+this.y+this.regY;
				
			}
			else
			{
				selectedPiece = null;
				
				canvas.removeChild(actionGuiObj);
			}
		},
		move: function () {	
			
			var g = moveTapeObj.graphics;
			g.clear();
            g.setStrokeStyle(3, "round", "round");
            g.beginStroke("#C00");
            g.moveTo(moveTapeObj._sx, moveTapeObj._sy).lineTo(this.x, this.y);
			
			//hide action gui since user is moving the piece
			if (this == selectedPiece)
			{
				selectedPiece = null;
				canvas.removeChild(actionGuiObj);
			}
		},
		end: function () {
			this.shadow = createShadowFromString(boardSettings.piece_shadow);
			Tween.get(this).to({alpha: 1.0, 
			                    scaleX: 1.0, 
			                    scaleY: 1.0},200);//.call(onComplete).play(nextTween);
			
			
			if (boardSettings.show_move_line)
				board.removeChild(moveTapeObj);
		}
	});
    
    
	
}

function enableBasicDrag(bitmap, handlersObj, moveParent)
{
    bitmap._atge_dragStart = handlersObj.start;
    bitmap._atge_dragMove = handlersObj.move;
    bitmap._atge_dragEnd = handlersObj.end;
    bitmap._atge_dragMoveParent = moveParent;
    
    bitmap.onPress = function(evt) {
        var offset = {x:evt.target.x-evt.stageX, y:evt.target.y-evt.stageY};
        if (evt.target._atge_dragMoveParent) {
            offset.x = evt.target.parent.x-evt.stageX;
            offset.y = evt.target.parent.y-evt.stageY;
        }

        //callback
        evt.target._atge_dragStart();
        
        //move
        evt.onMouseMove = function(ev) {
            if (evt.target._atge_dragMoveParent) {
                evt.target.parent.x = ev.stageX+offset.x;
                evt.target.parent.y = ev.stageY+offset.y;
            }
            else {
                evt.target.x = ev.stageX+offset.x;
                evt.target.y = ev.stageY+offset.y;
            }
            //callback
            evt.target._atge_dragMove();
        };
        
        //end
        evt.onMouseUp = function(ev) {
            //callback
            evt.target._atge_dragEnd();
        }
    };
    /*
    bitmap.onMouseOver = function(evt) {
        bitmap.scaleX = bitmap.scaleY = 1.2;
        console.log(this);
    };
    bitmap.onMouseOut = function(evt) {
        bitmap.scaleX = bitmap.scaleY = 1;
    };
    */
    
}

function createPieceBitmap(url)
{
    var piece = new Bitmap(url);
    piece.image.piece = piece;
    piece.image.onload = function(e) {
	    this.piece.regX = this.width/2;
	    this.piece.regY = this.height/2;
	    this.piece = null;
	};
    return piece;
}

function createShadowFromString(s)
{
    if (s=="" || Touch.isSupported()) return null;
    
    var sarr = s.split(" ");
    
    var shadow = new Shadow(sarr[3], sarr[0], sarr[1], sarr[2]);
    
    
    return shadow;
}

