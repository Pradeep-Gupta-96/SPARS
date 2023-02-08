import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import '../style/style.css'


const Login = () => {
  const Navigate = useNavigate()
  const [User, setUser] = useState({ email: "", password: "" })

  const onChang = (e) => {
    const { name, value } = e.target
    setUser({
      ...User,
      [name]: value
    })
  }
  const onClicke = async () => {
    const { email, password } = User
    try {
      if (email && password) {
        await axios.post("http://localhost:4000/signin", User)
        Navigate("/")
        alert("logging successfully")
      } else {
        alert("Ooops! Invaild")
      }
    } catch (error) {
      console.log(error)
    }
  }
  const login=()=>{
    Navigate("/login")
  }
  const registration=()=>{
    Navigate("/registration")
  }
  return (
    <div className="container">
      <div className="inputData">
        <div className="row">
          <div className="col" onClick={login}>login</div>
          <div className="col" onClick={registration}>Registration</div>
        </div>
        <input type="text" name='email' value={User.email} onChange={onChang} placeholder='Your Email' />
        <input type="password" name='password' value={User.password} onChange={onChang} placeholder='Your Password' />
        <div className="button" onClick={onClicke}>Login</div>
      </div>
    </div>
  )
}
export default Login