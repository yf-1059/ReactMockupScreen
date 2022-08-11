import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
};