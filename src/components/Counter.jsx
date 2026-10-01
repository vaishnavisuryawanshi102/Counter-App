import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount, ] = useState(50)
    const [decrementCount, setDecrementCount] = useState(50)

    function handleIncrement(){
      setCount((state)=>state = state+1)
    }

    function handleDecrement(){
      setDecrementCount((state)=>state = state-1)
    }

    function handleIncrement() {
     setCount((state) => state + 5)
    }

    function handleDecrement() {
      setDecrementCount((state) => state - 5)
    }

    function handleReset(){
      setCount(50)
      setDecrementCount(50)

    }

    let countVariable = 0

    function countIncre(){
        countVariable++
        console.log(countVariable)
    }

    function countDecre(){
      countVariable--
      console.log(countVariable)
    }

  return (


    <>
    <h3>Counter : {countVariable}</h3>
    <button onClick={()=>countIncre()}>Increment of variable</button>
    <hr />


    <h3>Count : {count}</h3>
    <button onClick={()=>setCount(count+1)}>INCREMENT</button>
    <button onClick={()=>handleIncrement()}>Increment By Function</button>
    <button onClick={() => setCount(count + 5)}>INCREMENT BY 5</button>
    <button onClick={()=>setCount(50)}>Reset</button>
    <button onClick={()=>handleReset()}>Reset By Function</button>


    <h3>Counter : {countVariable}</h3>
    <button onClick={()=>countDecre()}>Decrement of variable</button>
    <hr />

    <h3>Count : {decrementCount}</h3>
    <button onClick={()=>setDecrementCount(decrementCount-1)}>DECREMENT</button>
    <button onClick={()=>handleDecrement()}>Decrement By Function</button>
    <button onClick={() => setDecrementCount(decrementCount - 5)}>DECREMENT BY 5</button>
    <button onClick={()=>setDecrementCount(50)}>Reset</button>
    <button onClick={()=>handleReset()}>Reset By Function</button>
    </>
  )

}

export default Counter
