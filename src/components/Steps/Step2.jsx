import React, { useState } from 'react'
import Headings from '../Headings'
import Button from '../Common/Button'
import { Switch } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getPlanInfo } from '../../store/PlaninfoSlice'


const Step2 = () => {
    const dispatch =  useDispatch()
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [isChecked, setChecked] = useState(false);
    const planInfo = useSelector((state) => state.planInfo.plan);



    const handleChange = () => {
        setChecked(!isChecked);
    };



  return (
    <div>
    <Headings bigText="Select your plan" smallText="You have the option of monthly or yearly billing."/>
    <div>
        <Button onClick={()=>dispatch(getPlanInfo("Arcade"))} className={`${planInfo==="Arcade" &&" border-[#483EFF]"}`}>
            <div className='mx-3'>
                <img src='/images/icon-arcade.svg' alt='' className="" />
            </div>
            <div className='text-left'>
            <p className='text-[#022959] text-[15px] font-medium'>Arcade</p>
            <p className='text-[#9699AA] text-[14px] font-medium'>{isChecked?"$90/year":"$9/mo"}</p>
            {isChecked &&<p className='text-[#022959] text-[12px] font-normal'>2 months free</p>}
            </div>
        </Button>

        <Button onClick={()=>dispatch(getPlanInfo("Advanced"))} className={`${planInfo==="Advanced" &&" border-[#483EFF]"}`}>
            <div className='mx-3'>
                <img src='/images/icon-advanced.svg' alt='' className="" />
            </div>
            <div className='text-left'>
            <p className='text-[#022959] text-[15px] font-medium'>Advanced</p>
            <p className='text-[#9699AA] text-[14px] font-medium'>{isChecked?"$120/yr":"$12/mo"}</p>
            {isChecked &&<p className='text-[#022959] text-[12px] font-normal'>2 months free</p>}
            </div>
        </Button>

        <Button onClick={()=>dispatch(getPlanInfo("Pro"))} className={`${planInfo==="Pro" &&" border-[#483EFF]"}`}>
            <div className='mx-3'>
                <img src='/images/icon-pro.svg' alt='' className="" />
            </div>
            <div className='text-left'>
            <p className='text-[#022959] text-[15px] font-medium'>Pro</p>
            <p className='text-[#9699AA] text-[14px] font-medium'>{isChecked?"$150/yr":"$15/mo"}</p>
            {isChecked &&<p className='text-[#022959] text-[12px] font-normal'>2 months free</p>}
            </div>
        </Button>
    </div>
    <div className='flex justify-center bg-[#F8F9FF] py-3 mt-4 items-center'>
        <p className='text-[#022959] text-[14px] font-medium'>Monthly</p>
        <Switch  {...label}   checked={isChecked} className='mx-3' onChange={handleChange}/>
        <p className='text-[#9699AA] text-[14px] font-medium'>Yearly</p>

    </div>
    </div>
  )
}

export default Step2