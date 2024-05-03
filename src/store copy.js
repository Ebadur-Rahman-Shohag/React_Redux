// First Step

import { createStore } from "redux";
// import rootReducers from "./reducers";
import counterReducer from "./reducers/counter";

const store = createStore(counterReducer);

export default store;
