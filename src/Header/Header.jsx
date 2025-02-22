import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-section'>
      <h1 className='header-font'>Find 1000+ Guiders to guide your <br /> journey   through technology</h1>
      <h2 className='header-font-small'>Set your path to Success</h2>
      <button className='connect'>Connect With</button>
    </div>
  )
}

export default Header
