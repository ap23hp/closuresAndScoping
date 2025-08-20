const gameBoard = () => {
  let board = [];
  const createBoard = (str) => {
    for (let i = 0; i < 3; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        //  fill each cell with an empty string
        row.push(str);
      }
      board.push(row); // add the row into the board
    }
  };

  createBoard("");
  const printBoard = () => {
    for (let i = 0; i < board.length; i++) {
      console.log(board[i].join("|"));
    }
  };
  const getBoard = () => {
    return board;
  };
  const placeMarker = (row, col, symbol) => {
    board[row][col] === ""
      ? (board[row][col] = symbol)
      : console.log(`Spot already taken!.`);
  };
  const isBoardFull = () => board.flat().every((cell) => cell !== "");
  return {
    getBoard,
    placeMarker,
    printBoard,
    isBoardFull,
  };
};

const game = gameBoard();
//game.placeMarker(0, 1, "O");
// game.placeMarker(0, 1, "X");
// game.placeMarker(0, 2, "O");
// game.placeMarker(1, 0, "X");
// game.placeMarker(1, 1, "O");
// game.placeMarker(1, 2, "X");
// game.placeMarker(2, 0, "O");
// game.placeMarker(2, 1, "X");
// game.placeMarker(2, 2, "O");

//game.printBoard();
game.isBoardFull();

const playerFactory = (name, symbol) => {
  const currentPlayer = () => {
    console.log(`It's ${name}'s turn `);
  };
  sayHello = () => {
    console.log(`${name} plays as ${symbol}`);
  };
  return {
    name,
    symbol,
    sayHello,
    currentPlayer,
  };
};
const alice = playerFactory("Alice", "X");
const bob = playerFactory("Bob", "O");
console.log(alice, bob);
alice.sayHello();
alice.currentPlayer();



const playRoundFactory = () => {
  let currentPlayer = alice; // starting player
  let gameOver = false;
  const switchPlayer = () => {
    currentPlayer = currentPlayer === alice ? bob : alice;
    console.log(`Now it's ${currentPlayer.name}'s turn!`);
  };
  const winningCombos = [
    // rows
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],

    // cols
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],

    // diagonals
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];
  const checkWinner = () => {
    const board = game.getBoard(); // use getter from game
    for (let combo of winningCombos) {
      if (combo.every(([r, c]) => board[r][c] === currentPlayer.symbol)) {
        console.log(`${currentPlayer.name} wins!`);
        return true;
      }
    }
    return false;
  };

  const playRound = (row, col) => {
  if (gameOver) {
  console.log("Game already finished!");
  return;
}
    game.placeMarker(row, col, currentPlayer.symbol);
    if (!checkWinner()) {
      if (game.isBoardFull()) {
        console.log("It's a draw!");
        gameOver=true
      } else {
        switchPlayer();
      }
    } else{
          gameOver=true 
    }
  };
  return {
    playRound,
    switchPlayer,
  };
};

const round = playRoundFactory();

// round.playRound(0, 0); // Alice
// round.playRound(1, 0); // Bob
// round.playRound(0, 1); // Alice
// round.playRound(1, 1); // Bob
// round.playRound(0, 2); // Alice should win now
// game.printBoard();



round.playRound(0, 0); // Alice
round.playRound(0, 1); // Bob
round.playRound(0, 2); // Alice
round.playRound(1, 1); // Bob
round.playRound(1, 0); // Alice
round.playRound(1, 2); // Bob
round.playRound(2, 1); // Alice
round.playRound(2, 0); // Bob
round.playRound(2, 2); // Alice
game.printBoard();
round.playRound(2, 0); // Bob