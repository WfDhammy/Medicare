import React from 'react'
import RegisterLayout from '../Layout/RegisterLayout'
import image3 from '../assets/3rd Signup.svg'
import Input from '../Components/Input'
import { Link } from 'react-router'
import Button  from '../Components/Button'

export default function SignupPassword() {
  return (
    <RegisterLayout image={image3}
    heading='Secure Your Access'
    subHeading='Your health data is protected with industry-leading encryption. Step 3 of 3: finalise your security credentials.'
    >
      <div className='w-full'>

        <div className='flex items-center justify-between w-full gap-2 overflow-x-auto'>
        <div className='flex items-center gap-2 flex-shrink-0'>
          <p className='w-7 h-7 rounded-full bg-[#28574E] text-white text-[14px] flex items-center justify-center flex-shrink-0'>1</p>
          <span className='text-[#28574E] text-[14px] sm:text-[16px] font-medium'>Identity</span>
        </div>

        <div className='flex w-[40px] sm:w-[77.5px] h-px bg-[#28574E]  flex-shrink-0'></div>

        <div className='flex items-center gap-2 flex-shrink-0'>
          <p className='w-7 h-7 rounded-full bg-[#28574E]  text-white text-[14px] flex items-center justify-center flex-shrink-0'>2</p>
          <span className='text-[#28574E]    sm:text-[16px] font-medium '>OTP</span>
        </div>

        <div className='flex w-[40px] sm:w-[77.5px] h-px bg-[#28574E]  flex-shrink-0'></div>

        <div className='flex items-center gap-2 flex-shrink-0'>
          <p className='w-7 h-7 rounded-full bg-[#28574E]  text-white text-[14px] flex items-center justify-center flex-shrink-0'>3</p>
          <span className='text-[#28574E]  text-[14px] sm:text-[16px] font-medium'>Set Up</span>
        </div>
      </div>


        <form className='py-5'>
        <div className='mt-2'>
            <h1 className='text-[28px] text-[#141313]'>Set Up Password</h1>
            <p className='text-[18px] text-[#757575] '>finalise your security credentials.</p>
        </div>

        <div className='mt-6'>
            <label className='text-[18px] text-[#0C0C0C]' htmlFor="setPassword">Password</label>
            <Input className='mt-2 text-[#757575] text-[16px]' id='setPassword' type='text' placeholder='Enter Your Password' />
        </div>

        <div className='mt-6'>
            <label className='text-[18px] text-[#0C0C0C]' htmlFor="setConfirmPassword">Confirm Password</label>
            <Input className='mt-2 text-[#757575] text-[16px]' id='setConfirmPassword' type='text' placeholder='Confirm Your Password' />
        </div>

        <div className='flex mt-4 ml-0'>
            <div className='flex-1 w-[24px] h-[24px]'>
            <Input className='' type='checkbox'  />

            </div>
            <p className='text-[18px]'> I agree to the <Link className='text-[#28574E]' to="">Terms of Service</Link> and <Link className='text-[#28574E]' to="">Privacy Policy </Link> </p>
        </div>
        <div className='mt-8'>
            <Button  type='submit' content='Activate Account' />
        </div>

        <div className='flex justify-center mt-14'>
            <p className='text-[14px] text-[#6F797A]'>Need help? <Link className='text-[#28574E]' to="">Contact Support</Link> </p>
        </div>

      </form>

      </div>

    </RegisterLayout>
  )
}
