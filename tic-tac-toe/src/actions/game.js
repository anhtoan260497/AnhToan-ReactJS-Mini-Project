export const addNewGameChange = (idx,player) => {
  return {
    type: "ADD",
    chess: idx,
    player : player
  };
};

export const resetGame = () => {
    return {
        type : "RESET"
    }
}

export const resetAll = () => {
  return {
    type : 'RESET_ALL'
  }
}
