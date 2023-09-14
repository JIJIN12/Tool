import React, { useState } from 'react'
import './Signinform.css'
import Navbar from './components/navbar/Navbar'



function Signin() {

const [input,setInput] = useState({
    signin_email:"",                                          //to make sure data is null at first
    signin_password:""
})

const[errorlogin,set_errorlogin] = useState({})
const[isSubmit,setIsSubmit] = useState(false)                 //

console.log(input);
   


const inputChange = (event)=>{
    
    const {name,value} = event.target
    setInput({...input,[name]:value})
}
const validate = (values)=>{
    let error = {}
    if(!values.signin_email){
        error.signin_email="Enter email"
    }
    if(!values.signin_password){
        error.signin_password="Enter password"
    }
return error
}


const submit = async(e)=>{
try {
    e.preventDefault();
    set_errorlogin(validate(input))
    setIsSubmit(true)
    if(Object.keys(errorlogin).length === 0 && isSubmit){
        console.log("success");
    }
} catch (error) {
    
}
}
    return (
        <div>
            <>
            
                <Navbar/>
                <div className="container">
                    <h1>Sign In</h1>
                    <form method="get">
                        <label htmlFor="email">Email:</label>
                        <span style={{color:"red"}}>{errorlogin.signin_email}</span>
                        <input type="email" id="email" name="signin_email" onChange={inputChange} required="" />

                        <label htmlFor="password">Password:</label>
                        <span>{errorlogin.signin_password}</span>
                        <input type="password" id="password" name="signin_password" onChange={inputChange} required="" />

                        <button type="button" onClick={submit}>Sign In</button>
                    </form>
                </div>
            </>

        </div>
    )
}

export default Signin
