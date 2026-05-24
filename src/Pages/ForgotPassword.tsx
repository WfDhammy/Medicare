import React from 'react'
import AuthLayout from '../Layout/AuthLayout'
import Input from '../Components/Input'
import Button from '../Components/Button'
import {Link } from 'react-router'

export default function ForgotPassword() {
  return (
    <AuthLayout  heading="Forgot Your Password?" subHeading="We’ll send a 6-digit verification code to your email to reset your password.">
        <form action="">
            <div className='mt-6'>
            <label className="text-[18px] font-semibold" htmlFor="emailAddress">Email Address</label>
            <Input  id='emailAddress' type="text" placeholder='Enter your Email Address' className='my-2' />

            </div>

            <div className='mt-8'>
            <Button className=' ' type='submit' content='Update Password' />

            </div>


            <Link to="/login"><p className="text-center pt-3">Remember your password <span className="text-[#28574E] font-semibold">Log in</span></p></Link>
            
            
        </form>
    </AuthLayout>
  )
}
