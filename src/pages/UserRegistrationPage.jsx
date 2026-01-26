import React, { useState } from 'react'
import "../App.css"
import "../index.css"
const UserRegistrationPage = () => {
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    Role:''
  })
  const handleChange=(e)=>[
   setFormData({...formData,[e.target.value]:e.target.value})
  ]
  const handleSubmit=(e)=>{
  e.preventDefault()
  alert('Registration Successful')
  }
  return (
    <div id="form">
      <form onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        <input type="text" name='name' placeholder='Enter Your Name' onChange={handleChange}/><br />
        <input type="email" name='email' placeholder='Enter Your Email' onChange={handleChange}/><br />
        <input type="password" name='password' placeholder='Enter Your Password' onChange={handleChange}/><br />
        <select name="Role" id="" value={FormData.Role} onChange={handleChange}>
          <option>Choose Role</option>
          <option value="customer">Customer</option>
          <option value="freelancer">Freelancer</option>
          <option value="Recruiter"></option><br />
        </select><br />
        <button type="submit">Register</button>

      </form>
    </div>
  )
}

export default UserRegistrationPage