import React, { useReducer } from "react";

export default function ReducerOrnek() {
  const initialState = 0;

  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        throw new Error()
    }
  }

  return(
<div>
       <h1>{state}</h1>
       
       <button onClick={()=> {dispatch({type:"increment"})}}>İncrement </button>

       <button onClick={()=> {dispatch({type:"decrement"})}}>İncrement </button>
  </div>
  )
   
}
