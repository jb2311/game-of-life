'use strict'

const generateNewBoard = function (board) {
  const newBoard = [];

  for (let row = 0; row < board.length; row++) {
    newBoard[row] = [];

    for (let col = 0; col < board[row].length; col++) {
      const livingNeighbors = getLivingNeigbors(row, col, board)


      if (isLiving(board[row][col])) {
        if (livingNeighbors === 2 || livingNeighbors === 3) {
          newBoard[row][col] = 1;
        } else {
          newBoard[row][col] = 0;
        }
      } else {
        newBoard[row][col] = livingNeighbors === 3 ? 1 : 0;
      }
    }
  }

  return newBoard;
};

const getLivingNeigbors = function (row, col, board) {
  let livingNeighbors = 0;

  livingNeighbors += isLiving(board[row][col - 1]);
  livingNeighbors += isLiving(board[row][col + 1]);

  if (row + 1 < board.length) {
    livingNeighbors += isLiving(board[row + 1][col]);
    livingNeighbors += isLiving(board[row + 1][col - 1])
    livingNeighbors += isLiving(board[row + 1][col + 1])
  }

  if (row - 1 >= 0) {
    livingNeighbors += isLiving(board[row - 1][col]);
    livingNeighbors += isLiving(board[row - 1][col - 1])
    livingNeighbors += isLiving(board[row - 1][col + 1])
  }

  return livingNeighbors;

}

const isLiving = function (cell) {
  return cell || 0;
}

const generateInitialBoard = function (rows, cols) {
  const board = [];

  for (let row = 0; row < rows; row++) {
    board[row] = [];

    for (let col = 0; col < cols; col++) {
      board[row][col] = Math.round(Math.random());
    }
  }

  return board;
};

const execute = function ({ rows, columns, iterations }) {
  let board = generateInitialBoard(rows, columns);

  for (let i = 0; i < iterations; i++) {
    board = generateNewBoard(board);

    console.log(`Iteration: ${i + 1}`);
    console.log(board);
  }
}

module.exports = {
  execute
}