import React from 'react'
import AuthLayout from '../Layout/AuthLayout'
import Vector from "../assets/Frame 2085661202.svg"
import Input from '../Components/Input'

export default function VerifyCode() {
  return (
    <AuthLayout>
        <div className='flex items-center justify-center mx-auto w-13.25 h-[52.18px] bg-[#DCF2EE] rounded-full'>
            <img src={Vector} alt="" />
        </div>

        <form>
            <label htmlFor="otp" className='text-[18px]'>Otp Verification</label>
            <p>Enter the 6-digit code sent to [user@email.com]</p>

            <div className='flex gap-5 py-7'>
                {Array.from({length: 6}, (_,index)=>{
                    return <Input type='text' id={`otp-${index}`} inputMode="numeric" pattern='\d*' maxLength={1} className="flex items-center justify-center text-center border-[1.5px] border-[#D9D9D9] w-[44px] h-[44px] text-[18px] font-semibold focus:border-[#28574E] focus:outline-none hover:border-[#28574E]  transition-colors duration-200" />

                })}
            </div>

            <p className='flex items-center justify-center text-[#605D5D] text-[14px]'>Code expires in 15:00</p>


            <div className='flex justify-between items-center pt-8'>
                <button className='w-[177px] h-[54px] rounded-md text-[#28574E] border-[1.5px] border-[#28574E] cursor-pointer hover:bg-[#28574E] hover:text-white' type='submit'>Resend Code</button>

                <button className='w-[177px] h-[54px] rounded-md text-[#28574E] border-[1.5px] border-[#28574E] cursor-pointer hover:bg-[#28574E] hover:text-white' type='submit'>Veriffy Code</button>
            </div>
        </form>
    </AuthLayout>
  )
}
