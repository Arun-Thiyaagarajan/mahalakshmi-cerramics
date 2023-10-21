import React from 'react'
import './Hero.css'
import Navbar from '../Navbar/Navbar'

const Hero = ({title, content, height, fs}) => {
  return (
    <>
        <section className="hero pd-inline" style={{height:height}}>
            <h1 className="page-title" style={{ fontSize:fs}}>{ title }</h1>
            <p className='para'>{content}</p>
        </section>
    </>
  )
}

export default Hero