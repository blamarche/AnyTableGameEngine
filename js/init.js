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
		"board_shadow": "2 2 10 #000",
		"board_interact_shadow": "2 2 10 #0ff",
		"turn_number": 0,
		"grid_size": 100, //this is unsupported for now
		"piece_shadow": "3 3 10 #004",
		"piece_interact_shadow": "6 6 10 #007",
		"piece_interact_scale": 1.07,
		"piece_interact_opacity": 0.8,
		"notes": "Here is an example note field\nAnd another line of the note field",
		"chat": "Nick1: Sup<br/>Nick2: Yo!",
		"rolls": "2011-12-12 19:05:23 - Nick1 rolled a 6 from 2 12-sided dice.<br/>2011-12-14 11:14:57 - Nick2 rolled a 14 from 3 6-sided dice.<br/>"
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
			"position": [ 450, 50 ],
			"z_index": "front"
		},
		{ 
			"name": "Queen (Black)",
			"image_url": "../images/chess/queen.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 350, 50 ],
			"z_index": "front"
		},
		{ 
			"name": "Rook (Black)",
			"image_url": "../images/chess/rook.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 50, 50 ],
			"z_index": "front"
		 },
		 { 
			"name": "Rook (Black)",
			"image_url": "../images/chess/rook.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 750, 50 ],
			"z_index": "front"
		 },
		 { 
			"name": "Bishop (Black)",
			"image_url": "../images/chess/bishop.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 250, 50 ],
			"z_index": "front"
		 },
		 { 
			"name": "Bishop (Black)",
			"image_url": "../images/chess/bishop.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 550, 50 ],
			"z_index": "front"
		 },
		 { 
			"name": "Knight (Black)",
			"image_url": "../images/chess/horse.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 150, 50 ],
			"z_index": "front"
		 },
		 { 
			"name": "Knight (Black)",
			"image_url": "../images/chess/horse.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 650, 50 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (Black)",
			"image_url": "../images/chess/pawn.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 50, 150 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (Black)",
			"image_url": "../images/chess/pawn.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 150, 150 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (Black)",
			"image_url": "../images/chess/pawn.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 250, 150 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (Black)",
			"image_url": "../images/chess/pawn.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 350, 150 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (Black)",
			"image_url": "../images/chess/pawn.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 450, 150 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (Black)",
			"image_url": "../images/chess/pawn.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 550, 150 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (Black)",
			"image_url": "../images/chess/pawn.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 650, 150 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (Black)",
			"image_url": "../images/chess/pawn.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 750, 150 ],
			"z_index": "front"
		 },
		 {
			"name": "King (White)",
			"image_url": "../images/chess/kingw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 450, 750 ],
			"z_index": "front"
		},
		{ 
			"name": "Queen (White)",
			"image_url": "../images/chess/queenw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 350, 750 ],
			"z_index": "front"
		},
		{ 
			"name": "Rook (White)",
			"image_url": "../images/chess/rookw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 50, 750 ],
			"z_index": "front"
		 },
		 { 
			"name": "Rook (White)",
			"image_url": "../images/chess/rookw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 750, 750 ],
			"z_index": "front"
		 },
		 { 
			"name": "Bishop (White)",
			"image_url": "../images/chess/bishopw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 550, 750 ],
			"z_index": "front"
		 },
		 { 
			"name": "Bishop (White)",
			"image_url": "../images/chess/bishopw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 250, 750 ],
			"z_index": "front"
		 },
		 { 
			"name": "Knight (White)",
			"image_url": "../images/chess/horsew.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 150, 750 ],
			"z_index": "front"
		 },
		 { 
			"name": "Knight (White)",
			"image_url": "../images/chess/horsew.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 650, 750 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (White)",
			"image_url": "../images/chess/pawnw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 50, 650 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (White)",
			"image_url": "../images/chess/pawnw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 150, 650 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (White)",
			"image_url": "../images/chess/pawnw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 250, 650 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (White)",
			"image_url": "../images/chess/pawnw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 350, 650 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (White)",
			"image_url": "../images/chess/pawnw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 450, 650 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (White)",
			"image_url": "../images/chess/pawnw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 550, 650 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (White)",
			"image_url": "../images/chess/pawnw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 650, 650 ],
			"z_index": "front"
		 },
		 { 
			"name": "Pawn (White)",
			"image_url": "../images/chess/pawnw.png",
			"rotation": 0,
			"user_removable": true,
			"position": [ 750, 650 ],
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
		fps: 30
	});
	
	loadBoard(chessBoardJSON);
});