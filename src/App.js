import React from "react";
import { increment, decrement, logedIn } from "./actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.logedIn);
  const dispatch = useDispatch();
  return (
    <div>
      hello <h1>{counter}</h1>
      <button
        onClick={() => {
          dispatch(increment(5));
        }}
      >
        +
      </button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button
        onClick={() => {
          dispatch(logedIn());
        }}
      >
        Log In
      </button>
      {logged ? "show valuable information" : ""}
    </div>
  );
}

export default App;
