import React from 'react'
import RegisterLayout from '../Layout/RegisterLayout'
import image2 from "../assets/2nd Signup.svg"
import Input from '../Components/Input'
import Button from '../Components/Button'
import {Link} from "react-router"

export default function SignupVerifyCode() {
  return (
    <RegisterLayout image={image2} 
    heading="Securing your
    healthcare journey."
    subHeading='We use multi-factor authentication to ensure your
    medical records and personal data remain private
    and protected at every step.'>



      <div className='w-full'>
     <div className='flex items-center justify-between flex-shrink-0 w-full mx-auto gap-2 '>
        <div className='flex items-center gap-2 flex-shrink-0'>
          <p className='w-7 h-7 rounded-full bg-[#28574E] text-white text-[14px] flex items-center justify-center flex-shrink-0'>1</p>
          <span className='text-[#28574E] text-[14px] sm:text-[16px] font-medium'>Identity</span>
        </div>

        <div className='flex w-[25px] sm:w-[30px] lg:[77.5px]   h-px bg-[#28574E] flex-shrink-0'></div>

        <div className='flex items-center gap-2 flex-shrink-0'>
          <p className='w-7 h-7 rounded-full bg-[#28574E] text-white text-[14px] flex items-center justify-center flex-shrink-0'>2</p>
          <span className='text-[#28574E] sm:text-[16px] font-medium '>OTP</span>
        </div>

        <div className='flex w-[25px] sm:w-[30px] lg:[77.5px] h-px bg-gray-300 flex-shrink-0'></div>

        <div className='flex items-center gap-2 flex-shrink-0'>
          <p className='w-7 h-7 rounded-full bg-gray-200 text-gray-500 text-[14px] flex items-center justify-center flex-shrink-0'>3</p>
          <span className='text-gray-400 text-[14px] sm:text-[16px] font-medium'>Set Up</span>
        </div>
      </div>

      <form className='py-5'>
        <div className='gap-5 mt-4'>
          <h1 className='text-[28px] text-[#141313]'>Verify your account</h1>
          <p className='text-[#757575] text-[18px]'>We’ll send a 6-digit verification code to your email to reset your password.</p>
        </div>

        <div className='flex gap-5 py-7'>
            {Array.from({length: 6}, (_,index)=>{
                return <Input type='text' id={`otp-${index}`} inputMode="numeric" pattern='\d*' maxLength={1} className="flex items-center justify-center text-center border-[1.5px] border-[#D9D9D9] w-[44px] h-[44px] text-[18px] font-semibold focus:border-[#28574E] focus:outline-none hover:border-[#28574E]  transition-colors duration-200" />     
            })}
        </div>

        <p className='flex items-center justify-center text-[#605D5D] text-[14px]'>Code expires in 15:00</p>

        <Button className='text-[18px] mt-12' type='submit' content='Verify Code' />

        <p className='text-[18px] text-[#757575] mt-10 flex justify-center'>Didn't receive the code? <Link className='text-[#28574E] ml-2' to="">Resend Code</Link> </p>

      </form>

      </div>








    </RegisterLayout>
  )
}
