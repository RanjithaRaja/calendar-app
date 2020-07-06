import { Store, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import RootReducer, { State } from "./rootReducer";

const store: Store<State> = createStore(
  RootReducer,
  applyMiddleware(ReduxThunk)
);

export default store;
