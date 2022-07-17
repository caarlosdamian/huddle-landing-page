import React from 'react'
import { Button } from '../button/Button'
import './Box.scss'

export const Box = () => {
  return (
    <div className='box-container'>
        <h1 className="box-header">Ready To Build Your Community?</h1>
        <Button label='Get Started For Free' type='secondary large'/>
    </div>
  )
}
