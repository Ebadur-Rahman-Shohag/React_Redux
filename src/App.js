import { useSelector, useDispatch } from "react-redux";
import { increment } from "./reducers/counter";
import { decrement } from "./reducers/counter";

function App() {
  // Using the useSelector hook to access the state
  const count = useSelector((store) => store.count);

  // Using the useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

export default App;
