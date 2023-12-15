import React from 'react'
import Headings from '../Headings'
import { Link } from 'react-router-dom'

const Step4 = () => {
  return (
    <div>
    <Headings bigText="Finishing up" smallText="Double-check everything looks OK before confirming."/>
    <div className='p-3 bg-[#F8F9FF] my-5'>
    <div className='flex justify-between items-center'>
        <div>
        <h2 className='text-[#022959] text-[14px] font-medium'>Arcade (Monthly)</h2>
        <Link to='' className="underline text-[#9699AA] text-[14px] font-normal" >Change</Link>
        </div>
        <div>
            <p className='text-[#022959] text-[14px] font-bold'>$9/mo</p>
        </div>
    </div>
    <hr className='my-5'/>
    <div>
        <div className='flex justify-between items-center my-3'>
            <p className='text-[#9699AA] text-[14px] font-normal'>Online service</p>
            <p className='text-[#022959] text-[14px] font-normal'>+$1/mo</p>
        </div>
        <div className='flex justify-between items-center my-3'>
            <p className='text-[#9699AA] text-[14px] font-normal'>Larger storage</p>
            <p className='text-[#022959] text-[14px] font-normal'>+$2/mo</p>
        </div>
    </div>
    </div>
    <div className='flex justify-between items-center my-3'>
            <p className='text-[#9699AA] text-[14px] font-normal'>Total (per month)</p>
            <p className='text-[#483EFF] text-[16px] font-bold'>+$12/mo</p>
        </div>
   
    </div>
  )
}

export default Step4