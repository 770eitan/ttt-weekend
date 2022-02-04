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
/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/

/*-------------------------------- Functions --------------------------------*/
init()

function init(){
	board = [null,null,1,-1,null,null,null,null,null]
	message.textContent = "Welcome, X goes first!"
	turnTracker = 1
	winner = null
	render()
} 

function render (){
	console.log(squareEls)
	board.forEach(function (square, idx){
		console.log(square, idx)
		
		if (square === 1){ 
			squareEls[idx].textContent= "Chicken"

		}
		else if (square === -1){
			squareEls[idx].textContent= "Burrito"

		}
		else {
			squareEls[idx].textContent= ""
		}
	})
}

// // if (!isWinner){ `It is your turn ${turnTracker ? 1: -1} ` }

// // function renderX (){
// // 	let sqr=1
// // 	boardArray.forEach(function (sqr, idx){
// // 		const squareX = document.getElementsByClassName('.board');
// // 		board.style.background = 'black';
// // 		return squareX
// // })

// // }

// // function renderO (){
// // 	let sqr=-1
// // 	boardArray.forEach(function (sqr, idx){
// // 		const squareO = document.getElementsByClassName('.board');
// // 		board.style.background = 'red';
// // 		return squareO
// // })
// // }
// console.log(renderX)






// 1) Define the required variables used to track the state of the game:
  // None of these variables will need to hold a value when they are defined

	// 1.1) Use an array to represent the squares on the board.    

	// 1.2) Use a turn variable to track whose turn it is.

	// 1.3) Use a winner variable to represent three different game states:
	  // a player that won
	  // a tie has occured
	  // or a game that is still in play.


// 2) Store cached element references on the page that will be accessed in code more than once in variables to make code more concise, readable, and performant:

// 3) Upon loading, the app should:
// 	3.1) Call an initialize function to initialize the state variables
// 	3.2) Render those values to the page
// 	3.3) Wait for the user to click a square

// 4) Define the required constants

// 5) Handle a player clicking a square

// 6) Handle a player clicking the replay button
//