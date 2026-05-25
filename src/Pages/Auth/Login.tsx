import React, { useState } from 'react'
import AuthLayout from '../../Layout/AuthLayout'
import Input from '../../Components/Input'
import {Link, useNavigate} from 'react-router'
import Button from '../../Components/Button'
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

interface LoginData{
  userId: string,
  password: string,
}

interface Error{
  userId: string,
  password: string,
}

export default function login({}: Props) {
  const [loginData, setLoginData] = useState<LoginData>({
    userId: "",
    password: "",
  })
  const [errors, setErrors] = useState<Error>({
    userId: "",
    password: ""
  })
  const navigate = useNavigate()

  const handleLoginChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target;

    setLoginData(prev => ({
      ...prev, [name]: value
    }))
  }
  const [showPassword, setShowPassword] = useState(false);

  const validateLogin = ()=>{
    const {userId, password} = loginData;
    const newErrors: Error = {
      userId: "",
      password: ""
    }
    if(!userId.trim()){
      newErrors.userId = "PatientId/UserId is required"
    }else if (userId.trim().length < 3) {
      newErrors.userId = "Patient ID must be at least 3 characters"
    }

    if (!password) {
        newErrors.password = "Password is required";
    } else if (password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === "")
  }

  const handleLoginSubmit = (event : React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    if(!validateLogin())return;
    console.log("Form Submitted", loginData)
    setLoginData({
      userId: "",
      password: ""
    })
    navigate("/")

  }
  return (
    <AuthLayout heading= "Welcome Back" subHeading='Access your healthcare records, appointments, and care team.'>
        <form onSubmit={handleLoginSubmit} className='py-5' >
          <div className='mt-4'>
            <label className='font-semibold text-[18px]' htmlFor="userId">Hospital Patient ID / User ID</label>
            <Input id='userId'name='userId' type="text" onChange={handleLoginChange} value={loginData.userId} className='block mt-2' placeholder='Enter your patient ID' />
            {errors.userId && <p className='text-red-500 text-sm'>{errors.userId}</p>}
          </div>
          <div className='mt-4 relative'>
            <label className='font-semibold text-[18px] ' htmlFor="password">Password</label>
            <Input id='password' name='password' type={showPassword? "text" : "password"} onChange={handleLoginChange} value={loginData.password} className='block mt-2' placeholder='Enter your password' />
            <span onClick={()=> setShowPassword (!showPassword)} className="absolute right-3 sm:right-4 top-12 cursor-pointer ">{showPassword ? <FaRegEye /> :<FaEyeSlash />}</span>
            {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
          </div>

          <div className='mt-4'>
            <Link className='' to="/forgotPassword"><span className='text-[#28574E] font-medium'>Forgot password?</span></Link>

          </div>

          <div className='mt-6'>
            <Button className='' content='Sign In' type='submit' />

          </div>


            <p className='mt-6 text-center'>First time here? <Link to='/signup' ><span className='text-[#28574E] font-medium'>Activate Account</span></Link> </p>

        </form>
    </AuthLayout>
  )
}