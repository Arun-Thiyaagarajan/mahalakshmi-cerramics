import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Dash from '../../components/Dash'
import BottomLine from '../../components/BottomLine'

const ForgotPassword = () => {

  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
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
        <section className="login-container" style={{height: 'max-content'}}>

        <Link to='/' className='back-btn'>
            <i class="fa-solid fa-arrow-left" style={{color: '#1b4332'}}></i>
            <p>Back</p>
        </Link>

        <BottomLine marginblock='0.5rem' />

          <div className="main-title" style={{marginTop: '2rem'}}>
            <h1>Mahalakshmi Cerramics</h1>
            <Dash />
          </div>

          <div className='login-title'>
              <i class="fa-regular fa-face-frown" style={{color: '#1b4332'}}></i>
              <h2>Forgot Password</h2>
          </div>

          <div className="form-container">
            <form method='POST' onSubmit={handleForm} autoComplete='off'>

              <div className="input-field">
              <button className="ip-icon">
                <i class="fa-regular fa-user" style={{color: '#1b4332'}}></i>
              </button>
                <input 
                    type="text" 
                    id='username'
                    name='userName'
                    onFocus={() => handleInput('username')} 
                    onChange={handleChange}
                    placeholder='Username/Mobile No.' 
                    required />
              </div>
                                    
              <button type='submit' className="btn login-btn">LOGIN</button>
            
            </form>

          </div>

        </section>
        
        <p className="copyright" style={{marginTop: '5rem'}}>&copy; 2023 Mahalakshmi Cerramics. All Rights Reserved.</p>
    </>
  )
}

export default ForgotPassword