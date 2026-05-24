import React from 'react'
import AuthLayout from '../Layout/AuthLayout'
import Input from '../Components/Input'
import Button from '../Components/Button'

export default function ResetPassword() {
  return (
    <AuthLayout subHeading="You're just one step away from accessing your account." heading="Reset Your Password">
        <form action="">
            <label className='text-[18px] font-semibold' htmlFor="newPassword">New Password</label>
            <Input id='newPassword' type="password" placeholder='Enter your new password' className='my-2' />
            
            <label className='text-[18px] font-semibold' htmlFor="confirmPassword">Confirm Password</label>
            <Input id='confirmPassword' type="password" placeholder='Confirm your new password' className='my-2' />

            <Button className='mt-8 mb-2' type='submit' content='Update Password' />
        </form>
    </AuthLayout>
  )
}
