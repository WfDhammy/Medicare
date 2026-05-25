import React, { useState } from 'react'
import AuthLayout from '../Layout/AuthLayout'
import Input from '../Components/Input'
import Button from '../Components/Button'
import { useNavigate } from 'react-router'
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

interface ResetPassword{
  newPassword: string,
  confirmPassword: string,
}
interface Error{
  newPassword: string,
  confirmPassword: string
}

export default function ResetPassword() {
  const [resetPasswordData, setResetPasswordData] = useState<ResetPassword>({
    newPassword: "",
    confirmPassword: ""
  })
  const [errors, setErrors] = useState<Error>({
    newPassword: "",
    confirmPassword: ""
  })
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

  const handleResetPasswordChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target;

    setResetPasswordData(prev => ({
      ...prev, [name]: value
    }))

  }
  const validateResetPasswsord = () =>{
    const {newPassword, confirmPassword} = resetPasswordData
    const newErrors : Error ={
      newPassword: "",
      confirmPassword: ""
    }
    if(!newPassword){
      newErrors.newPassword = "Password is required"
    }else if (newPassword.length < 6) {
      newErrors.newPassword = "Password must be at least 6 characters"
    }

    if (!confirmPassword){
      newErrors.confirmPassword = "Password is required"
    }else if (confirmPassword !== newPassword){
      newErrors.confirmPassword = "Password do not match"
    }

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === "")
  }
  const navigate = useNavigate()

  const handleResetPasswordSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    if(!validateResetPasswsord())return;
    console.log("Password Subnmitted", resetPasswordData);
    setResetPasswordData({
      newPassword: "", 
      confirmPassword: ""
    })
    navigate("/passwordReset")
  }
  return (
    <AuthLayout subHeading="You're just one step away from accessing your account." heading="Reset Your Password">
        <form onSubmit={handleResetPasswordSubmit} action="">
          <div className='relative'>
            <label className='text-[18px] font-semibold' htmlFor="newPassword">New Password</label>
            <Input id='newPassword' name='newPassword' onChange={handleResetPasswordChange} value={resetPasswordData.newPassword} type={showPassword ? "text" : "password"} placeholder='Enter your new password' className='my-2' />
            <span onClick={()=> setShowPassword (!showPassword)} className="absolute right-3 sm:right-4 top-12 cursor-pointer ">{showPassword ? <FaRegEye /> :<FaEyeSlash />}</span>
            {errors.newPassword && <p className='text-red-500 text-sm'>{errors.newPassword}</p>}
          </div>
          <div className='relative mt-2'>
            <label className='text-[18px] font-semibold' htmlFor="confirmPassword">Confirm Password</label>
            <Input id='confirmPassword' name='confirmPassword' value={resetPasswordData.confirmPassword} onChange={handleResetPasswordChange} type={showConfirmedPassword ? "text" : "password"} placeholder='Confirm your new password' className='my-2' />
            <span onClick={()=> setShowConfirmedPassword (!showConfirmedPassword)} className="absolute right-3 sm:right-4 top-12 cursor-pointer ">{showConfirmedPassword ? <FaRegEye /> :<FaEyeSlash />}</span>
            {errors.confirmPassword && <p className='text-red-500 text-sm'>{errors.confirmPassword}</p>}

          </div>
          <div className='mt-4'>

          </div>

            <Button className='mt-8 mb-2' type='submit' content='Update Password' />
        </form>
    </AuthLayout>
  )
}
