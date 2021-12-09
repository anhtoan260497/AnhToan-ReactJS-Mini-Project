import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { addNewGameChange, resetAll, resetGame } from "../../actions/game";
import PlayZone from "../PlayZone";
import "./style.scss";

function GameContainer(props) {
  const gameStatus = useSelector((state) => state.game.gameStatus);
  const player = useSelector((state) => state.game.player);
  const winner = useSelector((state) => state.game.winner);
  const disable = useSelector((state) => state.game.disable);

  const playerOneScore = useSelector(state => state.game.playerOneScore)
  const playerTwoScore = useSelector(state => state.game.playerTwoScore)

  const dispatch = useDispatch();

  const handleAddChess = (idx) => {
    const action = addNewGameChange(idx, player);
    dispatch(action);
  };


  const handlePlayAgain = () => {
    const action = resetGame()
    dispatch(action)
  }

  const handleClearScore = () => {
    const action = resetAll()
    dispatch(action)
  }

  return (
    <div className="game-container">
      {disable ? (
        <div className="final">
          <div className="final-title">
            {winner === 0
              ?<><span>Player</span> <img src={process.env.PUBLIC_URL + "/svg/X.svg"} alt="" /> <span>won</span></>
              : winner === 1
              ? <><span>Player</span> <img src={process.env.PUBLIC_URL + "/svg/O.svg"} alt="" /> <span>won</span></>
              : `Tie`}
          </div>
          <div className="final-score">
            {playerOneScore} - {playerTwoScore}
          </div>
          <div className="final-btn" >
            <button onClick = {handlePlayAgain}>Play Again</button>
            <button onClick = {handleClearScore}>Clear Score</button>
          </div>
        </div>
      ) : null}
      <div className="game-logo">
        <img
          className={clsx("transition", {
            "non-active": player === 0 ? true : false,
          })}
          src={process.env.PUBLIC_URL + "/svg/O.svg"}
          alt=""
        />
      </div>
      <PlayZone gameStatus={gameStatus} handleAddChess={handleAddChess} />
      <div className="game-logo">
        <img
          className={clsx("transition", {
            "non-active": player === 1 ? true : false,
          })}
          src={process.env.PUBLIC_URL + "/svg/X.svg"}
          alt=""
        />
      </div>
    </div>
  );
}

export default GameContainer;
