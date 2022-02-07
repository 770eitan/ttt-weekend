/*-------------------------------- Constants --------------------------------*/
const WinningPaths = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 6],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const WinningPathsSum = WinningPaths.forEach(function (arr) {
  console.log(arr);
  arr.reduce(function (a, b) {
    console.log(a + b);
    return a + b;
  });
});

console.log(WinningPathsSum);
/*---------------------------- Variables (state) ----------------------------*/
// let squareX 'X'
// let squareO  'O'

// let squareStatus
let turnTracker = 0;
let winner = null;
let board;
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
const gameBoard = document.querySelector(".board");
const squareEls = document.querySelectorAll(".square");
let message = document.getElementById("message");
const imageX = document.createElement("imageX");
imageX.src =
  /*----------------------------- Event Listeners -----------------------------*/

  /*-------------------------------- Functions --------------------------------*/

  /*-------------------------------- Functions --------------------------------*/
  init();

function init() {
  board = [-1, -1, -1, null, null, -1, 1, null, null];
  message.textContent = "Welcome, X goes first!";
  boardCheck();
  turnTracker = 1;
  winner = null;
  render();
}

function handleClick(event) {
  let sqIdx = event.target.id.replace("sq", "");
  if (board[square] === null && winner === null) {
    board[square] = turn;
    console.log(boardArr);
    turn = turn * -1;
    render();
  }
}

function boardCheck() {
  console.log(WinningPaths[0]);
  WinningPaths[0].reduce(function (a, b) {
    console.log(a + b);
    return a + b;
  });
}

// "CA// console.log(arr);
//     arr.reduce(function (a, b) {
//       console.log(a + b);
//       return a + b;
//     });

function render() {
  console.log(squareEls);
  board.forEach(function (square, idx) {
    console.log(square, idx);
    if (square === 1) {
      squareEls[idx].textContent = "X";
      squareEls[idx].style.color = "red";
      squareEls[idx].style.background = "blue";
      message.textContent = "Y's turn";
    } else if (square === -1) {
      squareEls[idx].textContent = "Y";
      squareEls[idx].style.color = "blue";
      squareEls[idx].style.background = "red";
      message.textContent = "X's turn";
    }
  });

  //  if (winner !== null) {
  // 	if (winner === 3) {
  // message.textContent = "X wins"
  // 	} else if (winner === -3) {
  // 		message.textContent = "Y Wins"
  // 	} else if (board.forEach (function (!null)){
  // 		return message.textContent = "Tie"
  // 	})
}
