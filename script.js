var origBoard;
const huPlayer = 'O';
const aiPlayer = 'X';
const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]
const cells = document.querySelectorAll(".cell");
startGame();

function startGame() {
	document.querySelector(".endgame").style.display = "none"
	origBoard = Array.from(Array(9).keys());
	for (var i = 0; i < cells.length; i++)
}
