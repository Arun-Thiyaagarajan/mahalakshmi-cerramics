import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Dash from '../../components/Dash'
import './Auth.css'
import CircleLoader from '../../components/Loader/CircleLoader' 

const Auth = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [style, setStyle] = useState({})

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleValidCredentials = (val) => {

  }

  const handleInput = (ip) => {
    // const style = {
    //   border: '1px solid #c80000'
    // }
    // ip === 'username' ? setUsernameStyle(style) : setPasswordStyle(style)
  }

  const handleLoginClick = () => {
    // setIsLoading(true)
    const styleBg = {
      backgroundColor: '#005800b6',
    }
    if (isLoading) {
      setStyle(styleBg)
      // setIsLoading(false)
    }
  }

  const handleForm = (e) => {
    e.preventDefault();
    navigate('/home')
  }

  const handleChange = (e) => {
    const changeField = e.target.name
    const newValue = e.target.value

    setFormData((currData) => {
      return {
        ...currData,
        [changeField]: newValue,
      }
    })
  }

  return (
    <>
      <main className="auth">

        <section className="login-container">

          <div className="main-title">
            <h1>Mahalakshmi Cerramics</h1>
            <Dash />
          </div>

          <div className='login-title'>
            <i className="fa-solid fa-users" style={{ color: '#1b4332' }}></i>
            <h2>Employee Login</h2>
          </div>

          <div className="form-container">
            <form method='POST' onSubmit={handleForm} autoComplete='off'>

              <div className="input-field">
                <button className="ip-icon">
                  <i className="fa-regular fa-user" style={{ color: '#1b4332' }}></i>
                </button>
                <input
                  type="text"
                  id='username'
                  name='userName'
                  onFocus={() => handleInput('username')}
                  onChange={handleChange}
                  // onKeyUp={(e) => handleValidCredentials(e.target.value)}
                  placeholder='Username'
                  required />
              </div>

              <div className="input-field" style={{ marginBottom: '1.5rem' }}>
                <button className="ip-icon">
                  <i className="fa-solid fa-key" style={{ color: '#1b4332' }}></i>
                </button>
                <input
                  type="password"
                  id='password'
                  name='password'
                  onFocus={() => handleInput('password')}
                  onChange={handleChange}
                  // onKeyUp={(e) => handleValidCredentials(e.target.value)}
                  placeholder='Password'
                  required />
              </div>

              <Link to='/forgotpassword' className="forgot-password">Forgot password?</Link>
              <button type='submit'
                className="btn login-btn"
                onClick={handleLoginClick}
                disabled={isLoading}
                style={style}
              >
                {isLoading ? <CircleLoader /> : 'LOGIN'}
              </button>

            </form>

          </div>

        </section>

        <p className="copyright">&copy; 2023 Mahalakshmi Cerramics. All Rights Reserved.</p>
      </main>
    </>
  )
}

export default Auth