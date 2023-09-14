import React from 'react'
import './Profile.css'
export default function Profile() {
  return (
    <div className='Profile-body'>
      <div className="Profile-card">
  <div className="left-container">
    <img src="" alt="Profile-Image" />
    <h2 className="gradienttext proilfe-h2">John Doe</h2>
    <p className='Profile-p'>Web Developer</p>
  </div>
  <div className="right-container">
    <h3 className="gradienttext proilfe-h3">Profile Details</h3>
    <table className='Profile-table'>
      <tbody>
        <tr className='profile-tr'>
          <td className='profile-td'>Name :</td>
          <td className='profile-td'>John Doe</td>
        </tr>
        <tr className='profile-tr'>
          <td className='profile-td'>Age :</td>
          <td className='profile-td'>35</td>
        </tr>
        <tr className='profile-tr'>
          <td className='profile-td'>Mobile :</td>
          <td className='profile-td'>+91 XXXXXXXXXX</td>
        </tr>
        <tr className='profile-tr'>
          <td className='profile-td'>Email :</td>
          <td className='profile-td'>john@example.com</td>
        </tr>
        <tr className='profile-tr'>
          <td className='profile-td'>Address :</td>
          <td className='profile-td'>123 Main St, Anytown, USA</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

    </div>
  )
}
