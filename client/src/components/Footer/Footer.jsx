import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <footer className="footer pd-inline">
          <div className="company-info">
            <Link to='/home'>
              <h1 className="company-name">Mahalakshmi Cerramics</h1>
            </Link>
            <p className="address">
              799, Karaikkal Main Road, Muthupillai Mandapam, Kumbakonam, Tamil Nadu - 612401. 
            </p>
          </div>
          <p className="copyright-lt">&copy; 2023 Mahalakshmi Cerramics. All Rights Reserved.</p>
        </footer>
    </>
  )
}

export default Footer