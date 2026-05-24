import React from 'react'
import Logo from "../assets/MediCare.svg"



type Props = {
    children: React.ReactNode,
    heading: string,
    subHeading: string,
    ul?: React.ReactNode,
    image: string,
}

export default function RegisterLayout({heading, subHeading,children,ul,image}: Props) {
  return (
    <div className='min-h-screen w-full flex flex-col md:flex-row items-stretch' >
        
        <div className=' authBg px-6 md:px-20 py-10 md:py-15 w-full md:w-1/2 flex flex-col justify-between'>
            <div className='container mx-auto max-w-[625px]' >
                <img className='' src={Logo} alt="" />
                <h1 className='text-[#28574E] text-3xl md:text-[40px]'>{heading}</h1>
                <p className='text-[#3E3B3B] text-base md:text-[18px]'>{subHeading}</p>
                <div className='pt-4 pb-8'>
                    {ul}
                </div>
                <img className='w-full md:w-auto' src={image} alt="" />

            </div>

        </div>
            <div className='w-full md:w-1/2 px-6 md:px-20 py-10 md:py-15 flex items-center justify-center'>
                <div className='w-full max-w-md'>
                    {children}
                </div>

            </div>
    </div>
  )
}