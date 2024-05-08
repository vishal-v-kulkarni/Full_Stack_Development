/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to
 * write any Karel program you want.
 **/
function main() {
	// This call is for Move Top Right
	//moveToTopRight();

	// These calls are for diagonal move
	//diagonalBeeper();
	//diagonalBeeper();
	//diagonalBeeper();
	//diagonalBeeper();
	//putBeeper();

	// These calls are for chessboard pattern beepers

	twoRowsAlternateBeepers();

	twoRowsAlternateBeepers();

	putBeeper();
	twoMoveBeeper();
	twoMoveBeeper();
}

function moveToTopRight() {
	move();
	move();
	move();
	move();
	turnLeft();
	move();
	move();
	move();
	move();
	turnRight();
}

function diagonalBeeper() {
	putBeeper();
	move();
	turnLeft();
	move();
	turnRight();
}

function twoMoveBeeper() {
	move();
	move();
	putBeeper();
}

function oneMoveBeeper() {
	move();
	putBeeper();
}

function nextRowFromRight() {
	turnLeft();
	move();
	turnLeft();
}

function nextRowFromLeft() {
	move();
	turnRight();
	move();
	turnRight();
}

function twoRowsAlternateBeepers() {
	putBeeper();
	twoMoveBeeper();
	twoMoveBeeper();

	nextRowFromRight();

	oneMoveBeeper();
	twoMoveBeeper();

	nextRowFromLeft();
}
