import { Checkbox } from '@mui/material'
import React from 'react'
import Headings from '../Headings'
import Button from '../Common/Button'

const Step3 = () => {
  return (
    <div>
    <Headings bigText="Pick add-ons" smallText="Add-ons help enhance your gaming experience."/>
    <div>
        <Button >
            <div className='mx-3'>
                <Checkbox />
            </div>
            <div>
            <p className='text-[#022959] text-[15px] font-medium text-left'>Online service</p>
            <p className='text-[#9699AA] text-[14px] font-medium'>Access to multiplayer games</p>
            </div>
        </Button>

        <Button >
            <div className='mx-3'>
            <Checkbox/>
            </div>
            <div>
            <p className='text-[#022959] text-[15px] font-medium text-left'>Larger storage</p>
            <p className='text-[#9699AA] text-[14px] font-medium'>Extra 1TB of cloud save</p>
            </div>
        </Button>

        <Button >
            <div className='mx-3'>
            <Checkbox/>
            </div>
            <div>
            <p className='text-[#022959] text-[15px] font-medium text-left'>Customizable profile</p>
            <p className='text-[#9699AA] text-[14px] font-medium'>Custom theme on your profile</p>
            </div>
        </Button>
    </div>
   
    </div>
  )
}

export default Step3