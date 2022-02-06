/*-------------------------------- Constants --------------------------------*/
// const WinningPaths = [[0,1,2][0,3,6][0,4,8][1,4,7][2,5,6][2,4,6][3,4,5][6,7,8]]
// const WinningPathsSum = WinningPathsSum.reduce()
// console.log(WinningPaths)
/*---------------------------- Variables (state) ----------------------------*/
// let squareX 'X'
// let squareO  'O'

// let squareStatus 
let turnTracker= 0
let winner = null 
let board 
// if (WinningPaths === 3){
// 	let winner = 1
// } else if WinningPaths = -3 {
// 	let winnner = -1 
// } else WinningPaths === 2 || WinningPaths === -2 {
// 	message.textContent("It's a Tie!")
// }

// let tie 
// let stillPlaying


/*------------------------ Cached Element References ------------------------*/
const gameBoard = document.querySelector('.board') 
const squareEls = document.querySelectorAll(".square")
let message = document.getElementById('message')
const imageX = document.createElement ('imageX')
imageX.src =
/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/

/*-------------------------------- Functions --------------------------------*/
init()

function init(){
	board = [null,null,1,-1,1,-1,1,1,1]
	message.textContent = "Welcome, X goes first!"
	turnTracker = 1
	winner = null
	render()
} 

function render (){
	console.log(squareEls)
	board.forEach(function (square, idx){
		console.log(square, idx)
		//Display which square was chosen and whos turn it is
		if (square === 1){ 
			squareEls[idx].textContent = "X"
			message.textContent = "X's turn"
		}
		else if (square === -1){
			squareEls[idx].textContent= "Y"
			message.textContent = "Y's turn"

		}
		//display Winner status
		
		if (winner !== null) {
			if (winner === 3) {
		message.textContent = "X wins"
			} else if (winner === -3) {
				message.textContent = "Y Wins"
			} else if (board.forEach (function (!null){
				message.textContent = "Tie"
			}))

		}
	})
}

