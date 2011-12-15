/*
 Init script for main features
*/

//chess example board json
var chessBoardJSON = {
	"settings": {
		"atge_format_version": "1.0.0",
		"show_move_line": true,
		"table_color": "#f00",
		"board_image_url": "../images/chess/board.png",
		"board_shadow": "2 2 0 #000",
		"board_interact_shadow": "2 2 0 #0ff",
		"turn_number": 0,
		"grid_size": 50, //this is unsupported for now
		"piece_shadow": "3 3 10 #004",
		"piece_interact_shadow": "6 6 10 #007",
		"piece_interact_scale": 1.07,
		"piece_interact_opacity": 1,
		"notes": "<div>Here is an example note field</div><div>And another line of the note field</div>",
		"chat": "<div>Nick1: Sup</div><div>Nick2: Yo!</div>",
		"rolls": "<div>2011-12-12 19:05:23 - Nick1 rolled a 6 from 2 12-sided dice.</div><div>2011-12-14 11:14:57 - Nick2 rolled a 14 from 3 6-sided dice.</div>"
	},
	"addable_pieces": [
		{
			"name": "King (Black)",
			"image_url": "../images/chess/king.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ -1, -1 ],
			"z_index": "front"
		},
		{ 
			"name": "Queen (Black)",
			"image_url": "../images/chess/queen.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ -1, -1 ],
			"z_index": "front"
		},
		{ 
			"name": "Rook (Black)",
			"image_url": "../images/chess/rook.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ -1, -1 ],
			"z_index": "front"
		 },
		 { 
			"name": "Bishop (Black)",
			"image_url": "../images/chess/bishop.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ -1, -1 ],
			"z_index": "front"
		 },
		 { 
			"name": "Knight (Black)",
			"image_url": "../images/chess/horse.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ -1, -1 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (Black)",
			"image_url": "../images/chess/pawn.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ -1, -1 ],
			"z_index": "front"
		 },
		 {
			"name": "King (White)",
			"image_url": "../images/chess/kingw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ -1, -1 ],
			"z_index": "front"
		},
		{ 
			"name": "Queen (White)",
			"image_url": "../images/chess/queenw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ -1, -1 ],
			"z_index": "front"
		},
		{ 
			"name": "Rook (White)",
			"image_url": "../images/chess/rookw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ -1, -1 ],
			"z_index": "front"
		 },
		 { 
			"name": "Bishop (White)",
			"image_url": "../images/chess/bishopw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ -1, -1 ],
			"z_index": "front"
		 },
		 { 
			"name": "Knight (White)",
			"image_url": "../images/chess/horsew.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ -1, -1 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (White)",
			"image_url": "../images/chess/pawnw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ -1, -1 ],
			"z_index": "front"
		 }
	],
	"active_pieces": [
		{
			"name": "King (Black)",
			"image_url": "../images/chess/king.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 225, 25 ],
			"z_index": "front"
		},
		{ 
			"name": "Queen (Black)",
			"image_url": "../images/chess/queen.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 175, 25 ],
			"z_index": "front"
		},
		{ 
			"name": "Rook (Black)",
			"image_url": "../images/chess/rook.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 25, 25 ],
			"z_index": "front"
		 },
		 { 
			"name": "Rook (Black)",
			"image_url": "../images/chess/rook.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 375, 25 ],
			"z_index": "front"
		 },
		 { 
			"name": "Bishop (Black)",
			"image_url": "../images/chess/bishop.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 125, 25 ],
			"z_index": "front"
		 },
		 { 
			"name": "Bishop (Black)",
			"image_url": "../images/chess/bishop.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 275, 25 ],
			"z_index": "front"
		 },
		 { 
			"name": "Knight (Black)",
			"image_url": "../images/chess/horse.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 75, 25 ],
			"z_index": "front"
		 },
		 { 
			"name": "Knight (Black)",
			"image_url": "../images/chess/horse.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 325, 25 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (Black)",
			"image_url": "../images/chess/pawn.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 25, 75 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (Black)",
			"image_url": "../images/chess/pawn.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 75, 75 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (Black)",
			"image_url": "../images/chess/pawn.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 125, 75 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (Black)",
			"image_url": "../images/chess/pawn.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 175, 75 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (Black)",
			"image_url": "../images/chess/pawn.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 225, 75 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (Black)",
			"image_url": "../images/chess/pawn.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 275, 75 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (Black)",
			"image_url": "../images/chess/pawn.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 325, 75 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (Black)",
			"image_url": "../images/chess/pawn.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 375, 75 ],
			"z_index": "front"
		 },
		 {
			"name": "King (White)",
			"image_url": "../images/chess/kingw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 225, 375 ],
			"z_index": "front"
		},
		{ 
			"name": "Queen (White)",
			"image_url": "../images/chess/queenw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 175, 375 ],
			"z_index": "front"
		},
		{ 
			"name": "Rook (White)",
			"image_url": "../images/chess/rookw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 25, 375 ],
			"z_index": "front"
		 },
		 { 
			"name": "Rook (White)",
			"image_url": "../images/chess/rookw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 375, 375 ],
			"z_index": "front"
		 },
		 { 
			"name": "Bishop (White)",
			"image_url": "../images/chess/bishopw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 275, 375 ],
			"z_index": "front"
		 },
		 { 
			"name": "Bishop (White)",
			"image_url": "../images/chess/bishopw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 125, 375 ],
			"z_index": "front"
		 },
		 { 
			"name": "Knight (White)",
			"image_url": "../images/chess/horsew.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 75, 375 ],
			"z_index": "front"
		 },
		 { 
			"name": "Knight (White)",
			"image_url": "../images/chess/horsew.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 325, 375 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (White)",
			"image_url": "../images/chess/pawnw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 25, 325 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (White)",
			"image_url": "../images/chess/pawnw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 75, 325 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (White)",
			"image_url": "../images/chess/pawnw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 125, 325 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (White)",
			"image_url": "../images/chess/pawnw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 175, 325 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (White)",
			"image_url": "../images/chess/pawnw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 225, 325 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (White)",
			"image_url": "../images/chess/pawnw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 275, 325 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (White)",
			"image_url": "../images/chess/pawnw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 325, 325 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (White)",
			"image_url": "../images/chess/pawnw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 375, 325 ],
			"z_index": "front"
		 }
	]
};



//init
$(document).ready(function(){
	//initialize canvas
	$("#canvas").attr("width", window.innerWidth);
	$("#canvas").attr("height", window.innerHeight);
	
	canvas = oCanvas.create({
		canvas: "#canvas",
		background: "#225",
		fps: 25
	});
	
	loadBoard(chessBoardJSON);
});