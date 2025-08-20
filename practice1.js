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
  return {
    getBoard,
    placeMarker,
    printBoard,
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

const playerFactory = (name, symbol) => {
  sayHello = () => {
    console.log(`${name} plays as ${symbol}`);
  };
  return {
    name,
    symbol,
    sayHello,
  };
};
const alice = playerFactory("Alice", "X");
const bob = playerFactory("Bob", "O");
console.log(alice, bob);
alice.sayHello();

const playRoundFactory = () => {
  let currentPlayer = alice; // starting player
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
    game.placeMarker(row, col, currentPlayer.symbol);
    if (!checkWinner()) {
      currentPlayer = currentPlayer === alice ? bob : alice; // switch only if no winner
    }
  };

  return {
    playRound,
  };
};

const round = playRoundFactory();

round.playRound(0, 0); // Alice
round.playRound(1, 0); // Bob
round.playRound(0, 1); // Alice
round.playRound(1, 1); // Bob
round.playRound(0, 2); // Alice should win now
game.printBoard();
