import React, { useState } from 'react'
import AuthLayout from '../Layout/AuthLayout'
import Input from '../Components/Input'
import Button from '../Components/Button'
import {Link, useNavigate } from 'react-router'

interface ForgotPasswordData{
  email: string
}
interface Error{
  email: string
}

export default function ForgotPassword() {
  const [forgotPasswordData, setForgotPasswordData] = useState<ForgotPasswordData>({
    email: ""
  })
  const [errors, setErrors] = useState<Error>({
    email: ""
  })

  const emailRegex = /^\S+@\S+\.\S+$/;
  const navigate = useNavigate()

  const handleForgotPasswordChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target;
    setForgotPasswordData(prev => ({
      ...prev, [name]: value
      
    }))
  }
  const validateforgotPassword = ()=>{
    const {email} = forgotPasswordData
    const newErrors: Error = {
      email: ""
    }
    if (!email.trim()) {
        newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
        newErrors.email = "Invalid email address";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === "")
    
  }

  const handleForgotPasswordSubmit = (event : React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    if(!validateforgotPassword())return;
    setForgotPasswordData({
      email: ""
    })
    navigate("/verifyCode")
  }
  return (
    <AuthLayout  heading="Forgot Your Password?" subHeading="We’ll send a 6-digit verification code to your email to reset your password.">
        <form onSubmit={handleForgotPasswordSubmit} action="">
            <div className='mt-6'>
            <label className="text-[18px] font-semibold" htmlFor="emailAddress">Email Address</label>
            <Input name='email' onChange={handleForgotPasswordChange} value={forgotPasswordData.email}  id='emailAddress' type="text" placeholder='Enter your Email Address' className='my-2' />
            {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
            </div>

            <div className='mt-8'>
            <Button className=' ' type='submit' content='Update Password' />

            </div>


            <Link to="/login"><p className="text-center pt-3">Remember your password <span className="text-[#28574E] font-semibold">Log in</span></p></Link>
            
            
        </form>
    </AuthLayout>
  )
}
