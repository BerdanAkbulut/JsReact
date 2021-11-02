import React, {useContext} from 'react'
import { CounterContext } from './CounterContext'

export const FComponent = () => {
    const {counter,setCounter} = useContext(CounterContext)
    return (
        <div>

            <h1>Function Component</h1>
            <h1>{counter}</h1>
            <button onClick={()=> {setCounter(counter+1)}}>Arttır </button>
        <ChildComponent/>
        </div>
    )
}


export const ChildComponent = () => {
    const {counter,setCounter} = useContext(CounterContext)
    return (
        <div>

            <h1>Child Component</h1>
            <h1>{counter}</h1>
            <button onClick={()=> {setCounter(counter-1)}}>Azalt </button>

        </div>
    )
}