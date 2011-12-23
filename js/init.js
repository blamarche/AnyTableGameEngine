/*
 Init script for main features
*/


//init
$(document).ready(function(){
	//initialize canvas
	$("#canvas").attr("width", window.innerWidth);
	$("#canvas").attr("height", window.innerHeight);
		
	//find canvas 
    var domcanvas= document.getElementById("canvas");
    canvas = new Stage(domcanvas);

    if (Touch.isSupported()) { Touch.enable(canvas); }

    Ticker.setFPS(45);
    Ticker.addListener(canvas);
	
	$("#chess").click(function(){ $(this).parent().css("display","none"); loadBoard(chessBoardJSON); });
	$("#oware").click(function(){ $(this).parent().css("display","none"); loadBoard(owareBoardJSON); });
	
});


//oware / warri example board json
var owareBoardJSON = {
   "settings":{
      "atge_format_version":"1.0.0",
      "show_move_line":false,
      "table_color":"#f00",
      "board_image_url":"../images/oware/board.png",
      "board_shadow":"2 2 0 #000",
      "board_interact_shadow":"2 2 0 #0ff",
      "turn_number":0,
      "grid_size":0,
      "piece_shadow":"2 2 5 #111",
      "piece_interact_shadow":"4 4 5 #222",
      "piece_interact_scale":1.07,
      "piece_interact_opacity":0.95,
      "notes":"<div>Here is an example note field</div><div>And another line of the note field</div>",
      "chat":"<div>Nick1: Sup</div><div>Nick2: Yo!</div>",
      "rolls":"<div>2011-12-12 19:05:23 - Nick1 rolled a 6 from 2 12-sided dice.</div><div>2011-12-14 11:14:57 - Nick2 rolled a 14 from 3 6-sided dice.</div>"
   },
   "addable_pieces":[
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":0,
         "user_removable":false,
         "position":[
            0,
            0
         ],
         "z_index":"front"
      }
   ],
   "active_pieces":[
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":0,
         "user_removable":false,
         "position":[
            127,
            39
         ],
         "z_index":2
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":135,
         "user_removable":false,
         "position":[
            154,
            39
         ],
         "z_index":30
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":360,
         "user_removable":false,
         "position":[
            537,
            143
         ],
         "z_index":43
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":45,
         "user_removable":false,
         "position":[
            515,
            141
         ],
         "z_index":45
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":135,
         "user_removable":false,
         "position":[
            537,
            117
         ],
         "z_index":44
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":90,
         "user_removable":false,
         "position":[
            510,
            118
         ],
         "z_index":46
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":225,
         "user_removable":false,
         "position":[
            461,
            140
         ],
         "z_index":49
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":180,
         "user_removable":false,
         "position":[
            442,
            142
         ],
         "z_index":48
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":45,
         "user_removable":false,
         "position":[
            458,
            121
         ],
         "z_index":47
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":45,
         "user_removable":false,
         "position":[
            433,
            116
         ],
         "z_index":24
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":135,
         "user_removable":false,
         "position":[
            537,
            50
         ],
         "z_index":25
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":0,
         "user_removable":false,
         "position":[
            523,
            71
         ],
         "z_index":23
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":0,
         "user_removable":false,
         "position":[
            511,
            40
         ],
         "z_index":22
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":0,
         "user_removable":false,
         "position":[
            510,
            56
         ],
         "z_index":21
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":0,
         "user_removable":false,
         "position":[
            438,
            71
         ],
         "z_index":42
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":0,
         "user_removable":false,
         "position":[
            460,
            71
         ],
         "z_index":20
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":0,
         "user_removable":false,
         "position":[
            457,
            43
         ],
         "z_index":41
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":315,
         "user_removable":false,
         "position":[
            429,
            50
         ],
         "z_index":40
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":0,
         "user_removable":false,
         "position":[
            384,
            145
         ],
         "z_index":19
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":0,
         "user_removable":false,
         "position":[
            355,
            143
         ],
         "z_index":18
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":45,
         "user_removable":false,
         "position":[
            379,
            114
         ],
         "z_index":26
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":0,
         "user_removable":false,
         "position":[
            357,
            116
         ],
         "z_index":17
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":0,
         "user_removable":false,
         "position":[
            380,
            68
         ],
         "z_index":16
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":45,
         "user_removable":false,
         "position":[
            357,
            63
         ],
         "z_index":38
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":180,
         "user_removable":false,
         "position":[
            381,
            46
         ],
         "z_index":39
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":0,
         "user_removable":false,
         "position":[
            360,
            41
         ],
         "z_index":15
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":90,
         "user_removable":false,
         "position":[
            306,
            142
         ],
         "z_index":27
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":0,
         "user_removable":false,
         "position":[
            285,
            142
         ],
         "z_index":14
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":0,
         "user_removable":false,
         "position":[
            304,
            119
         ],
         "z_index":13
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":0,
         "user_removable":false,
         "position":[
            283,
            119
         ],
         "z_index":12
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":90,
         "user_removable":false,
         "position":[
            304,
            59
         ],
         "z_index":37
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":45,
         "user_removable":false,
         "position":[
            284,
            70
         ],
         "z_index":36
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":0,
         "user_removable":false,
         "position":[
            305,
            39
         ],
         "z_index":11
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":0,
         "user_removable":false,
         "position":[
            280,
            40
         ],
         "z_index":10
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":135,
         "user_removable":false,
         "position":[
            231,
            150
         ],
         "z_index":28
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":0,
         "user_removable":false,
         "position":[
            212,
            135
         ],
         "z_index":9
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":0,
         "user_removable":false,
         "position":[
            231,
            120
         ],
         "z_index":8
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":0,
         "user_removable":false,
         "position":[
            204,
            114
         ],
         "z_index":7
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":0,
         "user_removable":false,
         "position":[
            237,
            60
         ],
         "z_index":35
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":90,
         "user_removable":false,
         "position":[
            209,
            72
         ],
         "z_index":34
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":0,
         "user_removable":false,
         "position":[
            227,
            36
         ],
         "z_index":6
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":180,
         "user_removable":false,
         "position":[
            200,
            54
         ],
         "z_index":29
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":0,
         "user_removable":false,
         "position":[
            157,
            140
         ],
         "z_index":4
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":180,
         "user_removable":false,
         "position":[
            139,
            141
         ],
         "z_index":31
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":0,
         "user_removable":false,
         "position":[
            153,
            116
         ],
         "z_index":3
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":45,
         "user_removable":false,
         "position":[
            131,
            115
         ],
         "z_index":32
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":0,
         "user_removable":false,
         "position":[
            146,
            62
         ],
         "z_index":5
      },
      {
         "name":"Seed",
         "image_url":"../images/oware/seed.png",
         "rotation":45,
         "user_removable":false,
         "position":[
            127,
            63
         ],
         "z_index":33
      }
   ]
};

//chess example board json
var chessBoardJSON = {
	"settings": {
		"atge_format_version": "1.0.0",
		"show_move_line": true,
		"table_color": "#f00",
		"board_image_url": "../images/chess/board.png",
		"board_shadow": "2 2 0 rgba(0,0,0,0.3)",
		"board_interact_shadow": "2 2 0 rgba(0,255,255,0.3)",
		"turn_number": 0,
		"grid_size": 50, //this is unsupported for now (0 for no grid)
		"piece_shadow": "3 3 10 rgba(0,0,0,0.3)",
		"piece_interact_shadow": "6 6 10 rgba(0,0,0,0.3)",
		"piece_interact_scale": 1.07,
		"piece_interact_opacity": 0.90,
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


