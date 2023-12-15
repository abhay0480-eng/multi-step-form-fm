import React, { useEffect, useState } from 'react'
import Headings from '../Headings'
import { useDispatch } from 'react-redux'
import { getinfo } from '../../store/PersonalInfo'

const Step1 = () => {
    const dispatch =  useDispatch()
    const [personelInfo, setPersonelInfo] = useState({
        name:"",
        email:"",
        phoneNumber:""
    })

    useEffect(()=> {
        dispatch(getinfo(personelInfo))
    },[ personelInfo])

    
  return (
    <>
    <div>
    <Headings bigText="Personal info" smallText="Please provide your name, email address, and phone number."/>
    <form>
        <div className='my-5'>
        <label className='block' htmlFor='name'>Name</label>
            <input
            id='name'
            type='text'
            placeholder='e.g. Stephen King'
            className='border-[1px] border-[#D6D9E6] rounded-md p-3 w-full '
            onChange={(e)=>setPersonelInfo({...personelInfo,name: e.target.value})}
            />
        </div>
        <div className='my-5'>
        <label className='block'  htmlFor='email'>Email Address</label>
            <input
            id='email'
            type='text'
            placeholder='e.g. stephenking@lorem.com'
            className='border-[1px] border-[#D6D9E6] rounded-md p-3 w-full'
            onChange={(e)=>setPersonelInfo({...personelInfo,email: e.target.value})}
            />
        </div>
        <div  className='my-5'>
        <label className='block'  htmlFor='phoneNumber'>Phone Number</label>
            <input
            id='phoneNumber'
            type='text'
            placeholder='e.g. +1 234 567 890'
            className='border-[1px] border-[#D6D9E6] rounded-md p-3 w-full'
            onChange={(e)=>setPersonelInfo({...personelInfo,phoneNumber: e.target.value})}
            />
        </div>
          
        </form>
    </div>
    </>
  )
}

export default Step1