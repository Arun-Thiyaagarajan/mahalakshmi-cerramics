import React, { useState } from 'react'
import './SearchBar.css'

const SearchBar = ({}) => {

  const [isFocussed, setIsFocussed] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }
  
  const handleFocus = () => {
    setIsFocussed(true)
  }
  
  const handleBlur = () => {
    setIsFocussed(false)
    setIsActive(false)
  }

  const handleSearch = (e) => {
    e.preventDefault()
  }

  return (
    <>
        <div className="search-tab" id='search-tab'>
          <div className="search-div">
              <form className="search-container" onSubmit={ handleSearch }>
                  <input 
                      type="text" 
                      className="search-bar"
                      onClick={ handleClick }
                      onFocus={ handleFocus } 
                      onBlur={ handleBlur }
                      placeholder="Search Your Stock"
                      title='Search Your Stock'
                      />

                  <button onClick={ handleClick }  type='submit' className={`search ${ isFocussed ? 'search-focused':'' }`}>
                    <i className="fa-solid fa-magnifying-glass" style={{color: '#deebde'}}></i>
                  </button>
              </form>
          </div>

          <div className={`${isActive ? 'option-toggle' : ''} search-options`}>
            <div className="icon-box">
              <p className="icon-title">Filter</p>
              <i className="fa-solid fa-filter" style={{color:'#005600'}}></i>
            </div>
          </div>
        </div>        
    </>
  )
}

export default SearchBar