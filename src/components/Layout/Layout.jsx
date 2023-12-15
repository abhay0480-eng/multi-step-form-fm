import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Outlet, useNavigate,useLocation } from 'react-router'
import { getStepCount } from '../../store/StepSlice';

const Layout = () => {
    const dispatch =  useDispatch()
    const navigate =  useNavigate()
    const location = useLocation()
    const step = useSelector((state) => state.steps.stepCount);
    const personelInfo = useSelector((state) => state.info);
    const planInfo = useSelector((state) => state.planInfo.plan);
   



    const nextStep = () => {
        dispatch(getStepCount(step+1))
        // navigate(`/${(step+1).toString()}`)
    }

    const prevStep = () => {
      

            dispatch(getStepCount(step-1))
            // navigate(`/${(step-1).toString()}`)
    
    }

  return (
   <>
   <div className={`bg-[#EFF5FF] flex flex-col h-screen relative ${step!==5 && "justify-center"} `} >
    <div className='relative lg:hidden'>
        <img src='/images/bg-sidebar-mobile.svg' alt='' className='w-full lg:hidden' />
        
        <div className='absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 flex justify-evenly w-2/3'>
            <p className={`rounded-full w-10 h-10 ${step===1 && "bg-[#BEE2FD] !text-[#022959]"} text-white border-[1px] border-white flex items-center justify-center`}>1</p>
            <p  className={`rounded-full w-10 h-10 ${step===2 && "bg-[#BEE2FD] !text-[#022959]"} text-white border-[1px] border-white flex items-center justify-center`}>2</p>
            <p  className={`rounded-full w-10 h-10 ${step===3 && "bg-[#BEE2FD] !text-[#022959]"} text-white border-[1px] border-white flex items-center justify-center`}>3</p>
            <p  className={`rounded-full w-10 h-10 ${(step===4 || step===5) && "bg-[#BEE2FD] !text-[#022959]"} text-white border-[1px] border-white flex items-center justify-center`}>4</p>
        </div>
    </div>
    <div className='h-auto py-5 lg:w-3/5 px-5 shadow-2xl bg-white absolute top-[15%] lg:grid lg:grid-cols-5 lg:gap-x-12  rounded-xl mx-5  lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2'>
    <div className='relative col-span-2 hidden lg:block'>
    <img src='/images/bg-sidebar-desktop.svg' alt='' className='w-full hidden lg:block' />
    <div className='absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30  w-2/3'>
        <div className='flex items-center mt-10'>
            <p className={`rounded-full my-5 w-10 h-10 ${step===1 && "bg-[#BEE2FD] !text-[#022959]"} text-white border-[1px] border-white flex items-center justify-center`}>1</p>
            <div className='mx-4'>
                <p className='text-[#ABBCFF] text-[12px] font-normal'>STEP 1</p>
                <p className='text-[#FFF] text-[14px] font-bold'>YOUR INFO</p>
            </div>
        </div>

        <div className='flex items-center'>
            <p className={`rounded-full my-5 w-10 h-10 ${step===2 && "bg-[#BEE2FD] !text-[#022959]"} text-white border-[1px] border-white flex items-center justify-center`}>2</p>
            <div className='mx-4'>
                <p className='text-[#ABBCFF] text-[12px] font-normal'>STEP 2</p>
                <p className='text-[#FFF] text-[14px] font-bold'>SELECT PLAN</p>
            </div>
        </div>

        <div className='flex items-center'>
            <p className={`rounded-full my-5 w-10 h-10 ${step===3 && "bg-[#BEE2FD] !text-[#022959]"} text-white border-[1px] border-white flex items-center justify-center`}>3</p>
            <div className='mx-4'>
                <p className='text-[#ABBCFF] text-[12px] font-normal'>STEP 3</p>
                <p className='text-[#FFF] text-[14px] font-bold'>ADD-ONS</p>
            </div>
        </div>

        <div className='flex items-center'>
            <p className={`rounded-full my-5 w-10 h-10 ${(step===4 || step===5) && "bg-[#BEE2FD] !text-[#022959]"} text-white border-[1px] border-white flex items-center justify-center`}>4</p>
            <div className='mx-4'>
                <p className='text-[#ABBCFF] text-[12px] font-normal'>STEP 4</p>
                <p className='text-[#FFF] text-[14px] font-bold'>SUMMARY</p>
            </div>
        </div>
            {/* <p  className={`rounded-full my-5 w-10 h-10 ${step===2 && "bg-[#BEE2FD] !text-[#022959]"} text-white border-[1px] border-white flex items-center justify-center`}>2</p>
            <p  className={`rounded-full my-5 w-10 h-10 ${step===3 && "bg-[#BEE2FD] !text-[#022959]"} text-white border-[1px] border-white flex items-center justify-center`}>3</p>
            <p  className={`rounded-full my-5 w-10 h-10 ${(step===4 || step===5) && "bg-[#BEE2FD] !text-[#022959]"} text-white border-[1px] border-white flex items-center justify-center`}>4</p> */}
        </div>
    </div>
    <div className='col-span-3'>
       <Outlet/>
       {step!==5 && <div className={`h-20 bg-white mt-auto hidden  lg:flex ${step>1?"justify-between":"justify-end"} items-center text-[14px] font-medium`} >
    {step>1 && <button onClick={()=>prevStep()} className='mx-5  p-3 px-4 text-[#9699AA]'>Go Back</button>}
    <button onClick={()=>nextStep()} className='mx-5 bg-[#022959] p-3 px-4 text-white'>{step===4?"Confirm":"Next Step "}</button>
   </div>}
    </div>
    </div>
  {step!==5 && <div className={`h-20 bg-white mt-auto lg:hidden flex ${step>1?"justify-between":"justify-end"} items-center text-[14px] font-medium`} >
    {step>1 && <button onClick={()=>prevStep()} className='mx-5  p-3 px-4 text-[#9699AA]'>Go Back</button>}
    <button onClick={()=>nextStep()} className='mx-5 bg-[#022959] p-3 px-4 text-white'>{step===4?"Confirm":"Next Step "}</button>
   </div>}
   </div>
   </>
  )
}

export default Layout