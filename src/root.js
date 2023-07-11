import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import postsReducer from "./Components/Post/PostReducer";
import usersReducer from "./Components/User/UserReducer";
import App from "./App";

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
});

const store = createStore(rootReducer);

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
