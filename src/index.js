const inputReader = require('./inputReader');
const gameofLife = require('./gameOfLife')

const run = async function () {
  while (true) {
    const gameInfo = await inputReader.getGameInfo();

    gameofLife.execute(gameInfo);
  }
}

run()