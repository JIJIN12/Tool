import React, { useState } from 'react'
import './Signupform.css'
import Axios from 'axios'
import axios from 'axios';
import Navbar from './components/navbar/Navbar';
function Registerationform() {

    const [register, set_register] = useState({
        username:'',
        email:'',
        password:'',
        confirm_password:''
    })

    const [errorsignup,set_errorsignup] = useState({})
    const [ isSubmit,setIsSubmit] = useState(false)

    // console.log(register);

    const inputChange = (event) => {
        const { name, value } = event.target
        set_register({ ...register, [name]: value })
    }

    const validate = (values)=>{
        let error={}
        if(!values.username){
            error.username="enter username"
        }
        if(!values.email){
            error.email = "enter email"
        }
        if(!values.password){
            error.password="enter password"
        }
        if(!values.confirm_password){
            error.confirm_password="enter confirm password"
        }
    }

    const submit = async (event) => {
        try {
            event.preventDefault()
            set_errorsignup(validate(errorsignup))
            setIsSubmit(true)
            if(Object.keys(errorsignup).length==0 && isSubmit){
                console.log("success");
            }




            console.log(register)
            axios.post(`http://localhost:2000/signup`, register).then((data) => {
                console.log(data);
            }).catch((error)=>{
                console.log(error);
            })

        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
            <>
               <Navbar/>
                <div className="container">
                    <h1>Sign Up</h1>
                    <form>
                        <label htmlFor="username">Username:</label>
                        <span style={{color:"red"}}>{errorsignup.username}</span>
                        <input type="text" id="username" name="username" onChange={inputChange} required="" />

                        <label htmlFor="email">Email:</label>
                        <span style={{color:"red"}}>{errorsignup.email}</span>
                        <input type="email" id="email" name="email" onChange={inputChange} required="" />

                        <label htmlFor="password">Password:</label>
                        <span style={{color:"red"}}>{errorsignup.password}</span>
                        <input type="password" id="password" name="password" onChange={inputChange} required="" />
                        
                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <span style={{color:"red"}}>{errorsignup.confirm_password}</span>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm_password"
                            onChange={inputChange}
                            required=""
                        />
                        <button type="submit" onClick={submit}>Sign Up</button>
                    </form>
                </div>
            </>
        </div>
    )
}

export default Registerationform
