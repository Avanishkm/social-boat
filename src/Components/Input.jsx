import React from 'react'
import "./input.css";
const Input = (props) => {
    const {placeholder, onChange, value} = props;
  return (
    <div>
      <input placeholder={placeholder} onChange={onChange} value={value} className='input'/>
    </div>
  )
}

export default Input
