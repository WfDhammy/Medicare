import React from 'react';
import Logo from "../assets/Medibridge Logo.svg"


type Props = {
    children : React.ReactNode
    heading?: string,
    subHeading? : string,
}

export default function AuthLayout({children, heading, subHeading}: Props) {
  return (
    <div className='authBg min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-10'>
      <div className='flex item-center justify-center container mx-auto'>
        <div className='bg-white w-full max-w-[90%] sm:max-w-[400px] md:max-w-[450px] lg:w-[470px] h-auto p-5 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-lg'>
          <img className='flex mx-auto pb-4 sm:pb-5 w-auto h-10 sm:h-12 md:h-14' src={Logo} alt="" />

          <h1 className='text-[24px] sm:text-[26px] md:text-[28px] font-medium pb-2 text-center sm:text-left'>{heading}</h1>
          <p className='text-[14px] sm:text-[15px] md:text-[16px] text-[#757575] font-light text-center sm:text-left'>{subHeading}</p>

          <div className='mt-4 sm:mt-5 md:mt-6'>
            {children}
          </div>

        </div>

      </div>

    </div>
  )
}
