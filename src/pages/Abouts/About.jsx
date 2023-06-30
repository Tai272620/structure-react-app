import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { counterActions } from '../../stores/slices/counter.slice';
import Loading from "@components/Loadings/Loading";

export default function About() {
  const dispatch = useDispatch();
  const counterStore = useSelector(store => store.counterStore)

  useEffect(() => {
    console.log("counterStore.users", counterStore.users)
  }, [counterStore.users])
  return (
    <div>
      {counterStore.loading ? <Loading/> : <></>}
      <h1>About</h1>
      <button onClick={() => dispatch(counterActions.findAllUsers())}>Find All Users</button> 
      <Outlet></Outlet>
    </div>
  )
}
