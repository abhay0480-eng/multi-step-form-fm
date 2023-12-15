import React from 'react'
import Step1 from '../components/Steps/Step1';
import Step2 from '../components/Steps/Step2';
import { useSelector } from 'react-redux';
import Step5 from '../components/Steps/Step5';
import Step4 from '../components/Steps/Step4';
import Step3 from '../components/Steps/Step3';

const MultiForm = () => {
    const step = useSelector((state) => state.steps.stepCount);
  return (
    <>
    {step<2 && <Step1/> }
    {step===2 && <Step2/> }
    {step===3 && <Step3/> }
    {step===4 && <Step4/> }
    {step===5 && <Step5/> }
    </>
  )
}

export default MultiForm