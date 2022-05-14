//What is hooks?
//A Hook is a special function that lets you “hook into” React features.
//For example, useState is a Hook that lets you add React state to function components

//About useState hooks
//The useState hook lets you add state to function components. 
//We call it inside a function component to add some local state to it.

import { useState } from "react";

const Counter = () => {

    const [number, setNumber] = useState(0);

    const incCounterFun = () => {
        setNumber(number + 1);
    }

    return (
        <>
            <h2>You have clicked {number} times</h2>
            <button onClick={incCounterFun}>Click</button>
        </>
    )
}

export default Counter;