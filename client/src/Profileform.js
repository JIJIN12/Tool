import React, { useEffect, useState } from 'react'
import './Profileform.css'
import axios from 'axios'
export default function Profileform() {

    const [profileform, set_profileform] = useState({})
    // console.log(profileform);

    const profileform_input = (event) => {
        const { name, value } = event.target
        set_profileform({ ...profileform, [name]: value })
    }

    const profileform_submit = async (event) => {
        try {
            event.preventDefault()
            console.log(profileform);
            axios.post(`http://localhost:2000/signup/profileform`, profileform).then((Response1) => {
                console.log(Response1);
            })
        } catch (error) {
            console.log(error);
        }

    }


    // useEffect(()=>{
    //     axios.post(`http://localhost:2000/signup/profileform`,profileform).then((Response1)=>{
    //         console.log(Response1);
    //     })
    // })



    return (
        <div>

            <form className='profileform-form'>
                <table className='profileform-table'>
                    <div className='profileform-title'>
                        <h2 className='profileform-h2'>Profile registration</h2>
                    </div>
                    <tr>
                        <td>
                            <label>Name </label>
                        </td>
                        <td>
                            <input type='text'
                                name='Name'
                                onChange={profileform_input}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Age</label>
                        </td>
                        <td>
                            <input type='text'
                                name='Age'
                                onChange={profileform_input}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Mobile </label>
                        </td>
                        <td>
                            <input type='text'
                                name='Mobile'
                                onChange={profileform_input}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Email </label>
                        </td>
                        <td>
                            <input type='email'
                                name='Email'
                                onChange={profileform_input} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Address </label>
                        </td>
                        <td>
                            <input type='text'
                                name='Address'
                                onChange={profileform_input} />
                        </td>
                    </tr>
                    <button className='profileform-buttton' onClick={profileform_submit}>Submit</button>
                </table>
            </form>
        </div>
    )
}
