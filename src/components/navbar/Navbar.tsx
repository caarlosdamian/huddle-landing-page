import React from 'react'
import logo from  '../../assets/logo.svg'
import { Button } from '../button/Button'
import './Navbar.scss'

export const Navbar = () => {
  return (
    <div className='navbar-container'>
      <img src={logo} alt="logo" className="navbar-logo" />
      <Button type='primary' label='Try It Free'/>
    </div>
  )
}
