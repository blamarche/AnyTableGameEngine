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
		"board_image_url": "../images/decktet/board.png",
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
		"notes":"<div></div>",
      	"chat":"<div></div>",
      	"rolls":"<div></div>"
	},
	"addable_pieces": [
		{
			"name":"Seed1",
			"image_url":"../images/decktet/suit34-knot.gif",
			"rotation":0,
			"user_removable":true,
			"position":[
				200,
				200
			],
			"z_index":"front"
      	},{
			"name":"Seed2",
			"image_url":"../images/decktet/suit34-leaf.gif",
			"rotation":0,
			"user_removable":true,
			"position":[
				200,
				200
			],
			"z_index":"front"
      	},{
			"name":"Seed3",
			"image_url":"../images/decktet/suit34-moon.gif",
			"rotation":0,
			"user_removable":true,
			"position":[
				200,
				200
			],
			"z_index":"front"
      	},{
			"name":"Seed4",
			"image_url":"../images/decktet/suit34-suns.gif",
			"rotation":0,
			"user_removable":true,
			"position":[
				200,
				200
			],
			"z_index":"front"
      	},{
			"name":"Seed5",
			"image_url":"../images/decktet/suit34-wave.gif",
			"rotation":0,
			"user_removable":true,
			"position":[
				200,
				200
			],
			"z_index":"front"
      	},{
			"name":"Seed6",
			"image_url":"../images/decktet/suit34-wyrm.gif",
			"rotation":0,
			"user_removable":true,
			"position":[
				200,
				200
			],
			"z_index":"front"
      	}
	],
	"active_pieces": [
		{
			"name": "Piece",
			"image_url": "../images/decktet/c1.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c2.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c3.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c4.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c5.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c6.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c7.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c8.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c9.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c10.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c11.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c12.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c13.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c14.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c15.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c16.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c17.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c18.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c19.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c20.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c21.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c22.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c23.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c24.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c25.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c26.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c27.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c28.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c29.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c30.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c32.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c33.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c34.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c35.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c36.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 140 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/e37.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 355 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/e38.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 355 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/e39.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 355 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/e40.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 355 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/e41.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 355 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/e42.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 355 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/e43.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 355 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/e44.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 355 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/e45.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 355 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c1.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c2.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c3.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c4.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c5.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c6.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c7.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c8.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c9.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c10.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c11.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c12.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c13.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c14.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c15.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c16.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c17.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c18.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c19.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c20.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c21.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c22.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c23.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c24.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c25.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c26.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c27.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c28.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c29.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c30.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c32.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c33.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c34.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c35.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/c36.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/e37.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/e38.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/e39.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/e40.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/e41.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/e42.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/e43.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/e44.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},{
			"name": "Piece",
			"image_url": "../images/decktet/e45.png",
			"back_image_url": "../images/decktet/back.png",
			"rotation": 0,
			"flipped": true,
			"user_removable": false,
			"position": [ 105, 570 ],
			"z_index": "front"
		},
	]
};


