
import { useSelector,useDispatch } from "react-redux";
import { decrement, increment } from "./counter";
function App() {
  // Using the useSelector hook to access the state
const count = useSelector(store=>store.count)

  // Using the useDispatch hook to dispatch actions
  const dispatch = useDispatch()

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=>dispatch(increment)}>Decrement</button>
      <button onClick={()=>dispatch(decrement)}>Increment</button>
    </div>
  );
}

export default App;
