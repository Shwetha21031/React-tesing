import { GreetProps } from './greet.types'
import React from 'react'

const Greet = (props : GreetProps) => {
  return (
    <>
    <div>Hello {props.name ? props.name : 'Guest'}</div>
    </>
  )
}

export default Greet