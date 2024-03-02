import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers/todo_reducer"

const rootReducer=combineReducers({todoReducer,})
const store=createStore(rootReducer)


export default store