import React from 'react'
import "./UserForm.scss"
import { useDispatch } from 'react-redux'

export default function UserForm(props) {
    const dispatch = useDispatch();
    return (
        <div className='userForm_container'>
            <form className='forms' onSubmit={(e) => {
                e.preventDefault();
                // console.log(e.target.userName.value)
                if (e.target.userName.value == "") {
                    alert("Please input userName")
                    return
                }
                let newUser = {
                    name: e.target.userName.value,
                    email: e.target.userEmail.value,
                    phoneNumber: e.target.userPhoneNumber.value
                }
                if (props.dataForm.type == "add") {
                    console.log("da vao add", newUser)
                    dispatch(props.dataForm.functionSubmit(newUser))
                }
                if (props.dataForm.type == "update") {
                    dispatch(props.dataForm.functionSubmit({
                        userId: props.dataForm.preData.id,
                        editData: newUser
                    }))
                }
                // reset form
                e.target.userName.value = ""
                e.target.userEmail.value = ""
                e.target.userPhoneNumber.value = ""
                // props.dataForm.functionCloseForm(false)
                e.target.cancel.click()
            }}>
                {/* INput User Name */}
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            User Name
                        </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        name="userName"
                        defaultValue={props.dataForm.preData != null ? props.dataForm.preData.name: ""}
                    />
                </div>
                {/* INput User Email */}
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            User Email
                        </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="UserEmail"
                        aria-label="UserEmail"
                        aria-describedby="basic-addon1"
                        name="userEmail"
                        defaultValue={props.dataForm.preData != null ? props.dataForm.preData.email: ""}
                    />
                </div>
                {/* INput User Phone Number */}
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            User Phone Number
                        </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="User Phone Number"
                        aria-label="UserPhoneNumber"
                        aria-describedby="basic-addon1"
                        name="userPhoneNumber"
                        defaultValue={props.dataForm.preData != null ? props.dataForm.preData.phoneNumber: ""}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    {props.dataForm.type == "add" ? "Add" : "Save"}
                </button>
                <button type="button" className="btn btn-secondary" name='cancel' onClick={() => {
                    props.dataForm.functionCloseForm(false)
                }}>Hủy</button>
            </form>
        </div>
    )
}
