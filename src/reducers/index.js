
import { combineReducers } from 'redux'; // ✔️ Correct package is `redux`
import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
    games: gamesReducer,
    detail: detailReducer,
});

export default rootReducer; 