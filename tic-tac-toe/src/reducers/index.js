import { combineReducers } from "redux";
import gameplayReducer from "./gameplay";

const rootReducer = combineReducers({
    game : gameplayReducer,

})

export default rootReducer