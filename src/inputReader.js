'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Allows for use of async/await
const question = (str) => new Promise(resolve => rl.question(str, resolve));

const getGameInfo = async function () {
  const rows = await getRows();
  const columns = await getColumns();
  const iterations = await getIterations();

  return {
    rows,
    columns,
    iterations
  };
}

const getRows = async function () {
  const rows = await question('How many rows would you like the grid to have?:  ');

  checkValidInteger(rows);

  return rows;
}


const getColumns = async function () {
  const columns = await question('How many columns would you like the grid to have?:  ');

  checkValidInteger(columns);

  return columns;
}


const getIterations = async function () {
  const iterations = await question('How many interations would you like to run?:  ');

  checkValidInteger(iterations);

  return iterations;
}


const checkValidInteger = function (value) {
  value = Number.parseInt(value);

  if (Number.isInteger(value) && value > 0) {
    return value;
  } else {
    // TODO: Handle error more effectively 
    throw new Error('Value must be a positive integer.')
  }
}

module.exports = {
  getGameInfo
}
