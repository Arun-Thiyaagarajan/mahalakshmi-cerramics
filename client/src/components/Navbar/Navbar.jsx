import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Hamburger from './Hamburger'

const Navbar = () => {

  const [isMobileView, setIsMobileView] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 700); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check on initial load

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav className="navbar pd-inline" id='navbar'>

        <div className="logo">
          <h2><Link to='/home'>MLC</Link></h2>
        </div>

        {/* {isMobileView && <Hamburger />} */}
        <div className="nav-links" id='nav-links'>
          <li className='nav-item'><Link className='nav-link' to='/home'>Home</Link></li>
          <li className='nav-item'><Link className='nav-link' to='/category'>Category</Link></li>
        </div>

      </nav>
    </>
  )
}

export default Navbar