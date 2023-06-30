import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { counterActions } from '../../stores/slices/counter.slice';
import Loading from "@components/Loadings/Loading";
import UserForm from '../../components/UserForms/UserForm';

export default function About() {
  const dispatch = useDispatch();
  const counterStore = useSelector(store => store.counterStore)

  useEffect(() => {
    dispatch(counterActions.findAllUsers())
  }, [])

  useEffect(() => {
    console.log("counterStore.users", counterStore.users)
  }, [counterStore.users])

  // control userform
  const [showUserForm, setShowUserForm] = useState(false);
  return (
    <div>
      {counterStore.loading ? <Loading /> : <></>}
      <h1>About Page</h1>
      <button onClick={() => setShowUserForm(true)}>Add New User</button>
      {
        showUserForm ? <UserForm dataForm = {{
          functionCloseForm: setShowUserForm,
          type: "add",
          functionSubmit: counterActions.createNewUsers
        }}/> : <></>
      }
      
      <br />
      {counterStore.users.map((user) =>
        <Fragment>
          <div key={user.id}>UserName: {user.name}, UserId: {user.id}, UserEmail: {user.email}, UserPhoneNumber: {user.phoneNumber}</div>
          <button onClick={() => {
            dispatch(counterActions.deleteUserById(user.id))
          }} type='button' className='btn btn-danger'>Delete</button>
        </Fragment>
      )}
      <br />
      
      <Outlet></Outlet>
    </div>
  )
}
