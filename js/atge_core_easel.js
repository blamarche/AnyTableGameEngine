/*
TODO: Dice rolls
TODO: Card Deck / Random Draw / Shuffle
TODO: Categorized Pieces
TODO: Game Rules
TODO: Mobile-optimized UI
TODO: Custom game-type init script execution (for random maps, etc)
*/

//global vars for the game engine
var boardSettings = null;
var boardAddables = null;
var activePieces = [];
var addablePieces = {};
var canvas, moveTapeObj, board = null, actionGuiObj, selectedPiece = null, menuButton = null, zoomInButton = null, zoomOutButton = null;

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
		if (boardSettings.new_piece_position != null)
		{
		    newpiece.x = boardSettings.new_piece_position[0];
		    newpiece.y = boardSettings.new_piece_position[1];
		}
		else if (newpiece.x==-1 && newpiece.y==-1) 
		{
		    newpiece.x = board.getChildAt(0).image.width/2; //canvas.mouse.x - board.x;
		    newpiece.y = board.getChildAt(0).image.height/2; //canvas.mouse.y - board.y;
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

	//buttons
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
		$("#menu").height(canvas.height); //TODO: HACK : touch-scroll plugin issue?
		
		//---
		zoomInButton = new Bitmap("../images/gui_menu_zoomin.png");
		zoomInButton.x = canvas.canvas.width-32;
		zoomInButton.y = 0;
		zoomInButton.shadow = createShadowFromString("-2 2 2 #000");
		canvas.addChild(zoomInButton);
		
		zoomInButton.onClick = function(evt) {
		    board.scaleX = (board.scaleX >= 3.0) ? board.scaleX : board.scaleX+0.5 ;
		    board.scaleY = (board.scaleY >= 3.0) ? board.scaleY : board.scaleY+0.5 ;
		    //board.scaleY = 0.5;
		};
		
		//---
		zoomOutButton = new Bitmap("../images/gui_menu_zoomout.png");
		zoomOutButton.x = canvas.canvas.width-64;
		zoomOutButton.y = 0;
		zoomOutButton.shadow = createShadowFromString("-2 2 2 #000");
		canvas.addChild(zoomOutButton);
		
		zoomOutButton.onClick = function(evt) {
		    board.scaleX = (board.scaleX <= 0.5) ? board.scaleX : board.scaleX-0.5 ;
		    board.scaleY = (board.scaleY <= 0.5) ? board.scaleY : board.scaleY-0.5 ;
		};
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
	//$("#notes").html(boardSettings.notes);
	//$("#rolls").html(boardSettings.rolls);
	//$("#chat").html(boardSettings.chat);
	//$("#turn").html(boardSettings.turn_number);
	
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
	
	//shuffle order
	if (jsonObj.settings.shuffle_active)
	{
	    function randOrd(){
            return (Math.round(Math.random())-0.5);
        }
        jsonObj.active_pieces.sort(randOrd);
	}
	
	//create pieces on the board	
	for (var i=0; i<jsonObj.active_pieces.length; i++)
	{
	    var url=jsonObj.active_pieces[i].image_url;
	    if (jsonObj.active_pieces[i].flipped)
	        url=jsonObj.active_pieces[i].back_image_url;
	    
		var piece = createPieceBitmap(url, jsonObj.active_pieces[i].flipped);
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
		piece._atge_back_image = jsonObj.active_pieces[i].back_image_url;
		//piece._atge_flipped = jsonObj.active_pieces[i].flipped;
		
		piece._atge_flip = function() {
		    this._atge_flipped = !this._atge_flipped;
			
			if (this._atge_flipped)
			{
			    this.image = new Image();
			    this.image.src = this._atge_back_image;
			}
			else
			{
			    this.image = new Image();
			    this.image.src = this._atge_image;
			}
		};
		
		setPieceEvents(piece);
	}
	
	//create 'clone-able' pieces
	for (var i=0; i<jsonObj.addable_pieces.length; i++)
	{
	    var url=jsonObj.addable_pieces[i].image_url;
	    if (jsonObj.addable_pieces[i].flipped)
	        url=jsonObj.addable_pieces[i].back_image_url;
	        
	    var piece = createPieceBitmap(url, jsonObj.addable_pieces[i].flipped);
		piece.x = jsonObj.addable_pieces[i].position[0];
		piece.y = jsonObj.addable_pieces[i].position[1];
		piece.rotation= jsonObj.addable_pieces[i].rotation;
	    piece.shadow = createShadowFromString(jsonObj.settings.piece_shadow);
		
		addablePieces[ jsonObj.addable_pieces[i].name ] = piece;
		piece._atge_removable = jsonObj.addable_pieces[i].user_removable;
		piece._atge_name = jsonObj.addable_pieces[i].name;
		piece._atge_image = jsonObj.addable_pieces[i].image_url;
		
		piece._atge_flip = function() {
		    this._atge_flipped = !this._atge_flipped;
			
			if (this._atge_flipped)
			{
			    this.image = new Image();
			    this.image.src = this._atge_back_image;
			}
			else
			{
			    this.image = new Image();
			    this.image.src = this._atge_image;
			}
		};
		
	}
	
	//create menu
	createMenu();
	
	//add the finished game board to the canvas
	canvas.addChild(board);
	
	canvas.addChild(menuButton); //zindex
	canvas.addChild(zoomInButton); //zindex
	canvas.addChild(zoomOutButton); //zindex
}

function initActionGuiObj()
{
    actionGuiObj = new Container();
    
	var remove = new Bitmap("../images/gui_piece_remove.png");
	remove.y=2;
	remove.shadow = createShadowFromString("3 3 10 #005");
	
	var rotate = new Bitmap("../images/gui_piece_rotate.png");
	rotate.x=2
	rotate.y=2;
	rotate.shadow = createShadowFromString("3 3 10 #005");
	
	var flip = new Bitmap("../images/gui_piece_flip.png");
	flip.x=34
	flip.y=2;
	flip.shadow = createShadowFromString("3 3 10 #005");
	
	actionGuiObj.addChild(remove);
	actionGuiObj.addChild(rotate);
	actionGuiObj.addChild(flip);
	actionGuiObj._atge_remove = remove;
	actionGuiObj._atge_rotate = rotate;
	actionGuiObj._atge_flip = flip;
	
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
	
	flip.onClick = function(evt) {
	    if (selectedPiece!=null)
		{
			selectedPiece._atge_flip();
			
			console.log('flipped');
		}
	};
	
	rotate.onClick = function(evt) {
	    if (selectedPiece!=null)
		{
			if (!selectedPiece.tweenjs_count)
			    Tween.get(selectedPiece).to({rotation: selectedPiece.rotation+45},100);
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
				
				actionGuiObj.x = board.x+this.x*board.scaleX-this.regX*board.scaleX;
				actionGuiObj.y = board.y+this.y*board.scaleX+this.regY*board.scaleX;
				
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
	}, false, (boardSettings.grid_size != 0));
    
    
	
}

function enableBasicDrag(bitmap, handlersObj, moveParent, gridLocked)
{
    bitmap._atge_dragStart = handlersObj.start;
    bitmap._atge_dragMove = handlersObj.move;
    bitmap._atge_dragEnd = handlersObj.end;
    bitmap._atge_dragMoveParent = moveParent;
    
    bitmap.onPress = function(evt) {
        var offset = {x:evt.target.x-evt.stageX/board.scaleX, y:evt.target.y-evt.stageY/board.scaleY};
        if (evt.target._atge_dragMoveParent) {
            offset.x = evt.target.parent.x-evt.stageX/board.scaleX;
            offset.y = evt.target.parent.y-evt.stageY/board.scaleY;
        }

        //callback
        evt.target._atge_dragStart();
        
        //move
        evt.onMouseMove = function(ev) {
            var targ = evt.target;
            if (evt.target._atge_dragMoveParent) {
                targ = evt.target.parent;
            }
            
            var x, y;
            x = (ev.stageX/board.scaleX+offset.x);
            y = (ev.stageY/board.scaleX+offset.y);
                
            if (gridLocked)
            {
                if (x > targ.x + boardSettings.grid_size/2)
                    x = targ.x + boardSettings.grid_size;
                else if (x < targ.x - boardSettings.grid_size/2)
                    x = targ.x - boardSettings.grid_size;
                else 
                    x = targ.x;
                    
                if (y > targ.y + boardSettings.grid_size/2)
                    y = targ.y + boardSettings.grid_size;
                else if (y < targ.y - boardSettings.grid_size/2)
                    y = targ.y - boardSettings.grid_size;
                else 
                    y = targ.y;
            }
            
            targ.x = x;
            targ.y = y;
            
            //callback
            evt.target._atge_dragMove();
        };
        
        //end
        evt.onMouseUp = function(ev) {
            //callback
            evt.target._atge_dragEnd();
        }
    };
    
}

function createPieceBitmap(url, flipped)
{
    if (typeof flipped=="undefined")
        flipped=false;

    var piece = new Bitmap(url);
    piece.image.piece = piece;
    piece._atge_flipped = flipped;
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

