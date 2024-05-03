const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/increment":
      return { ...state, count: state.count + 1 };
    case "counter/decrement":
      return { ...state, count: state.count - 1 };
    default:
      throw new Error("Error....");
  }
};

// Actions creator
function increment(){
  return {
    type:"counter/increment"
  }
}
function decrement(){
  return {
    type:"counter/decrement"
  }
}

export { increment, decrement };
export default counterReducer;
