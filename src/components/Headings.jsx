import React from 'react'

const Headings = ({bigText,smallText}) => {
  return (
    <div> 
        <h1 className='text-[#022959] text-[24px] font-bold'>{bigText}</h1>
    <p className='text-[#9699AA] text-[16px] font-normal my-3'>{smallText}</p>
    </div>
  )
}

export default Headings