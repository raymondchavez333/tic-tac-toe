function Gameboard() {
  const rows = 3;
  const columns = 3;
  let board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Cell());
    }
  }

  const getBoard = () => board;

  const inputMark = (row, column, player) => {
    // this is where I need to do
    if(board[row][column].getValue() !== 0){
      return;
    }
    board[row][column].addMark(player);
  };

  const printBoard = () => {
    const boardWithCellValues = board.map((row) =>
      row.map((cell) => cell.getValue())
    );
    console.log(boardWithCellValues);
  };

  const resetBoard = () => {
    board = [];
    for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Cell());
      }
    }
  }

  return { getBoard, inputMark, printBoard, resetBoard };
}

function Cell() {
  let value = 0;

  const addMark = (player) => {
    value = player;
  };

  const getValue = () => value;

  return {
    addMark,
    getValue,
  };
}

function GameController(
  playerOneName = "Player One",
  playerTwoName = "Player Two"
) {
  const board = Gameboard();

  const players = [
    {
      name: playerOneName,
      mark: "X",
    },
    {
      name: playerTwoName,
      mark: "O",
    },
  ];

  let activePlayer = players[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn.`);
  };

  const playRound = (row, column) => {
    console.log(
      `Writing ${getActivePlayer().name}'s mark into row ${row} and column ${column}...`
    );
    board.inputMark(row, column, getActivePlayer().mark);

    /*  This is where we would check for a winner and handle that logic,
          such as a win message. */

    let checkBoard = board.getBoard();
    // console.log(checkBoard);

    // console.log(checkBoard[0][0].getValue());
    let boardValues = checkBoard.map((row) =>
      row.map((cell) => cell.getValue())
    );

    // console.log(boardValues);

    let totalFilled = 0;
        boardValues.forEach((item) =>{
          item.forEach((cell) => {
            if(cell === "X" || cell === "O"){
              totalFilled++;
            }
          })
        });

    // three consecutive by row for player 1
    if (boardValues[0][0] == "X" && boardValues[0][1] == "X" && boardValues[0][2] == "X"){
      console.log("Player 1 wins");
      board.resetBoard();
      switchPlayerTurn();
      printNewRound();
    }
    else if (boardValues[1][0] == "X" && boardValues[1][1] == "X" && boardValues[1][2] == "X"){
      console.log("Player 1 wins");
      board.resetBoard();
      switchPlayerTurn();
      printNewRound();
    }
    else if (boardValues[2][0] == "X" && boardValues[2][1] == "X" && boardValues[2][2] == "X"){
      console.log("Player 1 wins");
      board.resetBoard();
      switchPlayerTurn();
      printNewRound();
    }

    // three consecutive by columns for player 1
    else if (boardValues[0][0] == "X" && boardValues[1][0] == "X" && boardValues[2][0] == "X"){
      console.log("Player 1 wins");
      board.resetBoard();
      switchPlayerTurn();
      printNewRound();
    }
    else if (boardValues[0][1] == "X" && boardValues[1][1] == "X" && boardValues[2][1] == "X"){
      console.log("Player 1 wins");
      board.resetBoard();
      switchPlayerTurn();
      printNewRound();
    }
    else if (boardValues[0][2] == "X" && boardValues[1][2] == "X" && boardValues[2][2] == "X"){
      console.log("Player 1 wins");
      board.resetBoard();
      switchPlayerTurn();
      printNewRound();
    }

    // three consecutive by diagonals for player 1
    else if (boardValues[0][0] == "X" && boardValues[1][1] == "X" && boardValues[2][2] == "X"){
      console.log("Player 1 wins");
      board.resetBoard();
      switchPlayerTurn();
      printNewRound();
    }
    else if (boardValues[0][2] == "X" && boardValues[1][1] == "X" && boardValues[2][0] == "X"){
      console.log("Player 1 wins");
      board.resetBoard();
      switchPlayerTurn();
      printNewRound();
    }

    // three consecutive by row for player 2
    else if (boardValues[0][0] == "O" && boardValues[0][1] == "O" && boardValues[0][2] == "O"){
      console.log("Player 2 wins");
      board.resetBoard();
      switchPlayerTurn();
      printNewRound();
    }
    else if (boardValues[1][0] == "O" && boardValues[1][1] == "O" && boardValues[1][2] == "O"){
      console.log("Player 2 wins");
      board.resetBoard();
      switchPlayerTurn();
      printNewRound();
    }
    else if (boardValues[2][0] == "O" && boardValues[2][1] == "O" && boardValues[2][2] == "O"){
      console.log("Player 2 wins");
      board.resetBoard();
      switchPlayerTurn();
      printNewRound();
    }

    // three consecutive by columns for player 2
    else if (boardValues[0][0] == "O" && boardValues[1][0] == "O" && boardValues[2][0] == "O"){
      console.log("Player 2 wins");
      board.resetBoard();
      switchPlayerTurn();
      printNewRound();
    }
    else if (boardValues[0][1] == "O" && boardValues[1][1] == "O" && boardValues[2][1] == "O"){
      console.log("Player 2 wins");
      board.resetBoard();
      switchPlayerTurn();
      printNewRound();
    }
    else if (boardValues[0][2] == "O" && boardValues[1][2] == "O" && boardValues[2][2] == "O"){
      console.log("Player 2 wins");
      board.resetBoard();
      switchPlayerTurn();
      printNewRound();
    }

    // three consecutive by diagonals for player 2
    else if (boardValues[0][0] == "O" && boardValues[1][1] == "O" && boardValues[2][2] == "O"){
      console.log("Player 2 wins");
      board.resetBoard();
      switchPlayerTurn();
      printNewRound();
    }
    else if (boardValues[0][2] == "O" && boardValues[1][1] == "O" && boardValues[2][0] == "O"){
      console.log("Player 2 wins");
      board.resetBoard();
      switchPlayerTurn();
      printNewRound();
    }
    else if (totalFilled === 9){
      // Logic for a game tie

        console.log("Tie");
          board.resetBoard();
          switchPlayerTurn();
          printNewRound();
        
    }else{
      switchPlayerTurn();
      printNewRound();
    }
  };

  printNewRound();

  return {
    playRound,
    getActivePlayer,
    getBoard: board.getBoard,
  };
}

function ScreenController() {
  const game = GameController();
  const playerTurnDiv = document.querySelector(".turn");
  const boardDiv = document.querySelector(".board");

  const updateScreen = () => {
    // clear the board
    boardDiv.textContent = "";

    // get the newest version of the board and player turn
    const board = game.getBoard();
    const activePlayer = game.getActivePlayer();

    // Display player's turn
    playerTurnDiv.textContent = `${activePlayer.name}'s turn...`;

    // Render board squares
    board.forEach((row, indexFirst) => {
      row.forEach((cell, index) => {
        // Anything clickable should be a button!!
        const cellButton = document.createElement("button");
        cellButton.classList.add("cell");
        // Create a data attribute to identify the column
        // This makes it easier to pass into our `playRound` function
        cellButton.dataset.column = index;
        cellButton.dataset.row = indexFirst; // last edited
        cellButton.textContent = cell.getValue();
        boardDiv.appendChild(cellButton);
      });
    });
  };

  // Add event listener for the board
  function clickHandlerBoard(e) {
    const selectedColumn = e.target.dataset.column;
    const selectedRow = e.target.dataset.row;
    // Make sure I've clicked a column and not the gaps in between
    if (!selectedColumn || !selectedRow) return;

    game.playRound(selectedRow, selectedColumn);
    updateScreen();
  }
  boardDiv.addEventListener("click", clickHandlerBoard);

  // Initial render
  updateScreen();

  // We don't need to return anything from this module because everything is encapsulated inside this screen controller.
}

ScreenController();