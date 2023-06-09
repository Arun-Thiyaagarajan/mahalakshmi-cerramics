import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Dash from '../../components/Dash'
import axios from "axios";
import './Auth.css'

const Auth = () => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setloginStatus] = useState("");
  const [usernameStyle, setUsernameStyle] = useState({})
  const [passwordStyle, setPasswordStyle] = useState({})
  const navigate = useNavigate();

  const handleValidCredentials = (val) => {

  }

  const handleInput = (ip) => {
    // const style = {
    //   border: '1px solid #c80000'
    // }
    // ip === 'username' ? setUsernameStyle(style) : setPasswordStyle(style)
  }

  const handleForm = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/login", { username: username, password: password })
      .then((response) => {

        if (response.data.success) {
            navigate("/home");
        } else {
            setloginStatus(response.data.message);
        }
    })
    .catch((error) => {
        console.log(error);
    });

  }

  return (
    <>
        <section className="login-container">

          <div className="main-title">
            <h1>Mahalakshmi Cerramics</h1>
            <Dash />
          </div>

          <h2 className='login-title'>Employee Login</h2>

          <div className="form-container">
            <form method='POST' onSubmit={() => handleForm(e)} autoComplete='off'>

              <div className="input-field" style={usernameStyle}>
                <input 
                    type="text" 
                    id='username'
                    name='username'
                    onFocus={() => handleInput('username')} 
                    onChange={(event) => setPassword(event.target.value)}
                    onKeyUp={(e) => handleValidCredentials(e.target.value)}
                    placeholder='Enter your username' 
                    required />
              </div>
            
              <div className="input-field" style={passwordStyle}>
                <input 
                    type="password" 
                    id='password'
                    name='password'
                    onFocus={() => handleInput('password')} 
                    onChange={(event) => setUserName(event.target.value)}
                    onKeyUp={(e) => handleValidCredentials(e.target.value)}
                    placeholder='Enter your password' 
                    required />
              </div>
            
              <Link to='' className="forgot-password">Forgot password?</Link>
            
              <button type='submit' className="btn login-btn">LOGIN</button>
            
            </form>

          </div>

          <p className="copyright">&copy; 2023 Mahalakshmi Cerramics. All Rights Reserved.</p>

        </section>
    </>
  )
}

export default Auth