import {combineReducers, createStore} from "redux";
import schoolReducer from "./school-reducer";


let reducers = combineReducers({
    school: schoolReducer,
});

let store = createStore(reducers)

window.store = store;

export default store;