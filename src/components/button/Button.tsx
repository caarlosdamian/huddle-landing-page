import React from 'react'
import './Button.scss'

interface ButtonProps {
  label: string
  type:string
}

export const Button = ({label,type,...rest}:ButtonProps) => {
  return (
    <button className={`button ${type}`} >{label}</button>
  )
}
