const initialState = {
  gameStatus: ["", "", "", "", "", "", "", "", ""],
  player: 0,
  winner: false,
  disable: false,

  playerOneScore: 0,
  playerTwoScore: 0,
};

const gamePlayReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      if (action.player === 1 && state.gameStatus[action.chess] === "x") {
        return state;
      } else if (
        action.player === 0 &&
        state.gameStatus[action.chess] === "o"
      ) {
        return state;
      }

      const newGameStatus = JSON.parse(JSON.stringify(state)); //deep copy
      if (action.player === 0) {
        newGameStatus.gameStatus[action.chess] = "x";
        newGameStatus.player += 1;

        const gameStatus = newGameStatus.gameStatus;

        if (
          (gameStatus[0] === gameStatus[1] &&
            gameStatus[1] === gameStatus[2] &&
            gameStatus[0] === "x") ||
          (gameStatus[3] === gameStatus[4] &&
            gameStatus[4] === gameStatus[5] &&
            gameStatus[3] === "x") ||
          (gameStatus[6] === gameStatus[7] &&
            gameStatus[7] === gameStatus[8] &&
            gameStatus[6] === "x") ||
          (gameStatus[0] === gameStatus[3] &&
            gameStatus[3] === gameStatus[6] &&
            gameStatus[0] === "x") ||
          (gameStatus[1] === gameStatus[4] &&
            gameStatus[4] === gameStatus[7] &&
            gameStatus[1] === "x") ||
          (gameStatus[2] === gameStatus[5] &&
            gameStatus[5] === gameStatus[8] &&
            gameStatus[2] === "x") ||
          (gameStatus[0] === gameStatus[4] &&
            gameStatus[4] === gameStatus[8] &&
            gameStatus[0] === "x") ||
          (gameStatus[2] === gameStatus[4] &&
            gameStatus[4] === gameStatus[6] &&
            gameStatus[2] === "x")
        ) {
          newGameStatus.winner = 0;
          newGameStatus.disable = true;
          newGameStatus.playerOneScore += 1;
        }
      } else {
        newGameStatus.gameStatus[action.chess] = "o";
        newGameStatus.player -= 1;

        const gameStatus = newGameStatus.gameStatus;
        if (
          (gameStatus[0] === gameStatus[1] &&
            gameStatus[1] === gameStatus[2] &&
            gameStatus[0] === "o") ||
          (gameStatus[3] === gameStatus[4] &&
            gameStatus[4] === gameStatus[5] &&
            gameStatus[3] === "o") ||
          (gameStatus[6] === gameStatus[7] &&
            gameStatus[7] === gameStatus[8] &&
            gameStatus[6] === "o") ||
          (gameStatus[0] === gameStatus[3] &&
            gameStatus[3] === gameStatus[6] &&
            gameStatus[0] === "o") ||
          (gameStatus[1] === gameStatus[4] &&
            gameStatus[4] === gameStatus[7] &&
            gameStatus[1] === "o") ||
          (gameStatus[2] === gameStatus[5] &&
            gameStatus[5] === gameStatus[8] &&
            gameStatus[2] === "o") ||
          (gameStatus[0] === gameStatus[4] &&
            gameStatus[4] === gameStatus[8] &&
            gameStatus[0] === "o") ||
          (gameStatus[2] === gameStatus[4] &&
            gameStatus[4] === gameStatus[6] &&
            gameStatus[2] === "o")
        ) {
          newGameStatus.winner = 1;
          newGameStatus.disable = true;
          newGameStatus.playerTwoScore += 1;
        }
      }

      if (
        !newGameStatus.gameStatus.includes("") &&
        newGameStatus.winner === false
      ) {
        newGameStatus.disable = true;
      }

      return newGameStatus;

    case "tie":
      const tieStatus = JSON.parse(JSON.stringify(state));
      tieStatus.disable = "true";
      return tieStatus;

    case "RESET":
      console.log(state.playerOneScore, state.playerTwoScore);
      const reset = {
        ...initialState,
        playerOneScore: state.playerOneScore,
        playerTwoScore: state.playerTwoScore,
      };
      return reset;
    case "RESET_ALL":
      const reset_all = {
        ...initialState,
      };
      return reset_all;

    default:
      return state;
  }
};

export default gamePlayReducer;
