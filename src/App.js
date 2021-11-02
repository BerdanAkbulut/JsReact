import React, { useState,useContext } from "react";
import { Container } from "semantic-ui-react";
import { CounterContext } from "./CounterContext";
import { FComponent } from "./FComponent";

const App = () => {
  const [counter,setCounter] = useState(0)
  //const {counter,setCounter} = useContext(CounterContext)
  return (
    <div className="App ">
      <Container>
       <h1>{counter}</h1>

       <button onClick={()=> {setCounter(counter+1)}}>Arttır </button>
       <hr></hr>
       <button onClick={()=> {setCounter(counter-1)}}>Azalt </button>
          
          <CounterContext.Provider value={{counter,setCounter}}>
            <FComponent/>
          </CounterContext.Provider>
      </Container>
    </div>
  );
};

export default App;
