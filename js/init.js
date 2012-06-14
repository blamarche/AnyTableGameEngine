/*
 Init script for main features
*/


//init
$(document).ready(function(){
	//initialize canvas
	var wh = window.innerWidth;
	if (window.innerHeight>wh)
	    wh = window.innerHeight;
	
	$("#canvas").attr("width", wh);
	$("#canvas").attr("height", wh);
		
	//find canvas 
    var domcanvas= document.getElementById("canvas");
    canvas = new Stage(domcanvas);

    if (Touch.isSupported()) { Touch.enable(canvas); }

    Ticker.setFPS(40);
    Ticker.addListener(canvas);
    
	loadBoard(mpBoardJSON);
	
});


//chess example board json
var mpBoardJSON = {
	"settings": {
		"atge_format_version": "1.0.0",
		"show_move_line": false,
		"table_color": "#f00",
		"board_image_url": "../images/micropul/board.png",
		"board_shadow": "0 0 0 rgba(0,0,0,0.3)",
		"board_interact_shadow": "2 2 0 rgba(0,255,255,0.3)",
		"turn_number": 0,
		"grid_size": 0, //0 for no grid
		"new_piece_position": [175, 175],
		"piece_shadow": "0 0 0 rgba(0,0,0,0.3)",
		"piece_interact_shadow": "6 6 10 rgba(0,255,255,0.3)",
		"piece_interact_scale": 1.00,
		"piece_interact_opacity": 0.90,
		"shuffle_active": true,
	},
	"addable_pieces": [
		
	],
	"active_pieces": [
		{
			"name": "Start Piece",
			"image_url": "../images/micropul/_6_5.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": false,
			"user_removable": false,
			"position": [ 500, 500 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_0_0.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_0_1.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_0_2.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_0_3.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_0_4.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_0_5.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_1_0.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_1_1.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_1_2.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_1_3.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_1_4.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_1_5.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_2_0.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_2_1.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_2_2.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_2_3.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_2_4.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_2_5.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_3_0.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_3_1.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_3_2.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_3_3.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_3_4.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_3_5.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_4_0.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_4_1.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_4_2.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_4_3.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_4_4.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_4_5.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_5_0.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_5_1.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_5_2.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_5_3.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_5_4.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_5_5.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_6_0.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_6_1.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_6_2.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_6_3.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_6_4.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_7_0.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_7_1.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_7_2.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_7_3.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_7_4.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/micropul/_7_5.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 65, 90 ],
			"z_index": "front"
		},{
			"name": "Stone",
			"image_url": "../images/micropul/stone.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": false,
			"user_removable": false,
			"position": [ 15, 180 ],
			"z_index": "front"
		},{
			"name": "Stone",
			"image_url": "../images/micropul/stone.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": false,
			"user_removable": false,
			"position": [ 15, 210 ],
			"z_index": "front"
		},{
			"name": "Stone",
			"image_url": "../images/micropul/stone.png",
			"back_image_url": "../images/micropul/back.png",
			"rotation": 0,
			"flipped": false,
			"user_removable": false,
			"position": [ 15, 240 ],
			"z_index": "front"
		},
	]
};


