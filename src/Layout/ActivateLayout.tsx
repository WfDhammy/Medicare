import React from 'react'
import Button from '../Components/Button'
import ActivationLogo from "../assets/Vector.svg"

type Props = {
    heading: string,
    subHeading: string,
    button: React.ReactNode,
    
    
}

export default function ActivateLayout({heading, subHeading, button}: Props) {
  return (
    <div className='bg-gray-100 flex items-center justify-center min-h-screen mx-auto px-4 sm:px-6 md:px-8' >
        <div className='bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-sm w-full text-center'>
        <div className='flex justify-center mb-4'>
        <div className='flex justify-center bg-[#DCFCE7] items-center rounded-full w-[50px] h-[50px]'>
            <img className='w-[29.59px] h-[29.59px]' src={ActivationLogo} alt="" />
        </div>
        </div>

        <div className='mt-4 '>
            <h1 className='text-[#000000] text-[18px] sm:text-[20px] font-semibold '>{heading}</h1>
            <p className='text-[14px] sm:text-[16px] text-[#8F8A8A] mt-2 px-2 sm:px-4'>{subHeading}</p>
        </div>  

        <div className='mt-6 sm:mt-8'>
            {button}
        </div>

        </div>
    </div>
  )
}