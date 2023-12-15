import React from 'react'
import { useSelector } from 'react-redux';

const Button = ({children,className, ...rest}) => {

  return (
    <button {...rest} className={`flex items-center w-full border-[1px] border-[#D6D9E6] py-5 my-3 bg-[#F8F9FF] rounded-xl ${className}`}>{children}</button>
  )
}

export default Button