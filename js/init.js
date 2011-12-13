/*
 Init script for main features
*/

var boardJSON = {};
var activePieces = [];
var addablePieces = [];

$(document).ready(function(){
	
	//initialize canvas
	$("#canvas").attr("width", window.innerWidth);
	$("#canvas").attr("height", window.innerHeight);
	
	var canvas = oCanvas.create({
		canvas: "#canvas",
		background: "#225",
		fps: 60
	});
	
	//create parent board
	var board = canvas.display.image({
		x: 0,
		y: 0,
		origin: { x: "left", y: "top" },
		shadow: "10 10 10 #000",
		image: "http://upload.wikimedia.org/wikipedia/commons/e/e1/Jupiter_(transparent).png"
	});
	
	//create pieces on the board	
	var piece = canvas.display.image({
		x: 300,
		y: 300,
		origin: { x: "center", y: "center" },
		shadow: "10 10 10 #000",
		image: "http://www.celoxdesign.net/images/tutorials/52/earth_from_space2.png"
	});
	
	board.addChild(piece);
	
	//create 'clone-able' pieces
	
	
	//setup event bindings
	board.dragAndDrop();
	piece.dragAndDrop({
		start: function () {
			this.shadow = "20 20 20 #ff0";
		},
		move: function () {	},
		end: function () {
			this.shadow = "10 10 10 #000";
		}
	});
	
	//add the finished game board to the canvas
	canvas.addChild(board);
		
	
	
	/*
	board.bind("click tap", function() {
	
	});
	*/
});