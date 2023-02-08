import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import "../style/style.css"

const Registration = () => {
  const Navigate = useNavigate()
  const [User, setUser] = useState({ name: "", email: "", phone: "", password: "", cpassword: "", });
  const onchange = (e) => {
    const { name, value } = e.target
    setUser({
      ...User,
      [name]: value
    })
  }

  const onClick = async () => {
    const { name, email, phone, password, cpassword } = User
    try {
      if (name && email && phone && password && password === cpassword) {
        await axios.post("http://localhost:4000/register", User)
        Navigate("/login")
        alert("yeah! Registration Successfully")
      } else {
        alert("Oops! Invalid Registration")
      }
    } catch (error) {
      console.log(error)
    }
  }
  const login = () => {
    Navigate("/login")
  }
  const registration = () => {
    Navigate("/registration")
  }
  return (
    <div className="container">
      <div className="inputData">
        <div className="row">
          <div className="col" onClick={login}>login</div>
          <div className="col" onClick={registration}>Registration</div>
        </div>
        <input type="text" name='name' value={User.name} onChange={onchange} placeholder='Your Name' />
        <input type="text" name='email' value={User.email} onChange={onchange} placeholder='Your Email' />
        <input type="text" name='phone' value={User.phone} onChange={onchange} placeholder='Contact Number' />
        <input type="password" name='password' value={User.password} onChange={onchange} placeholder='Your Password' />
        <input type="password" name='cpassword' value={User.cpassword} onChange={onchange} placeholder='Conferm Your Password' />
        <div className="button" onClick={onClick}>Register</div>
      </div>
    </div>
  )
}

export default Registration