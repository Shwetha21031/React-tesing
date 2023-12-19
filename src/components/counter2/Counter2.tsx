import React from 'react'
import { counter2props } from './Counter2.types'
const Counter2 = (props : counter2props) => {
  return (
    <>
      <div>Counter2</div>
      <div>
        <h3>{props.count}</h3>
      </div>
      {props.handleincrement && (
        <button onClick={props.handleincrement}>Increment</button>
      )}
      {props.handledecrement && (
        <button onClick={props.handledecrement}>Decrement</button>
      )}
    </>
  );
}

export default Counter2