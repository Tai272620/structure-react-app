import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from "@stores/slices/counter.slice"

export default function Home() {
  const counterStore = useSelector(store => store.counterStore)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(counterStore)
  }, [])
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => dispatch(counterActions.increment())}>Increase</button>
      <p>{counterStore.counter}</p>
      <button onClick={() => dispatch(counterActions.decrement())}>Decrease</button>
      <br />
      <button onClick={() => dispatch(counterActions.resetCounter({
        number: 100
      }))}>Reset</button>
    </div>
  )
}
