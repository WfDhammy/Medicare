import React, {useState} from 'react'
import RegisterLayout from '../Layout/RegisterLayout'
import image3 from '../assets/3rd Signup.svg'
import Input from '../Components/Input'
import { Link, useNavigate } from 'react-router'
import Button  from '../Components/Button'
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

interface SignupPasswordData{
  password: string,
  confirmPassword: string,
  terms: boolean
}

interface Error{
  password: string,
  confirmPassword: string,
  terms: string


}

export default function SignupPassword() {
  const [signupPasswordData, setSignupPasswordData] = useState<SignupPasswordData>({
    password: "",
    confirmPassword: "",
    terms: false
  })
  const [errors, setErrors] = useState<Error>({
    password: "",
    confirmPassword: "",
    terms: ""
} )
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const handleSignupPasswordChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value, type, checked}  = e.target;

    setSignupPasswordData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value

    }));

    setErrors(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? false : ""
    }));

  }

  const navigate = useNavigate()

  const validateSignupPasswordForm = (): boolean=>{
    const {password, confirmPassword, terms} = signupPasswordData;
    const newErrors : Error ={
      password: "",
      confirmPassword: "",
      terms: ""
    };

    if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
    
    if (!confirmPassword){
      newErrors.confirmPassword = "Confirm Password is required"
    }else if (confirmPassword !== password){
      newErrors.confirmPassword = "Password do not match"
    }

    if(!terms){
       newErrors.terms = "You must agree to the Terms of Service and Privacy Policy"


    }

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === "");
  }

  const handleSignupPasswordSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    if(!validateSignupPasswordForm())return;
    console.log("Password submitted", signupPasswordData);
    setSignupPasswordData({
      password: "",
      confirmPassword: "",
      terms: false
    })
    navigate("/activateAccount")
    
  }
  
  return (
    <RegisterLayout image={image3}
    heading='Secure Your Access'
    subHeading='Your health data is protected with industry-leading encryption. Step 3 of 3: finalise your security credentials.'
    >
      <div className='w-full'>

        <div className='flex items-center justify-between w-full gap-2 mx-auto'>
        <div className='flex items-center gap-2 flex-shrink-0'>
          <p className='w-7 h-7 rounded-full bg-[#28574E] text-white text-[14px] flex items-center justify-center flex-shrink-0'>1</p>
          <span className='text-[#28574E] text-[14px] sm:text-[16px] font-medium'>Identity</span>
        </div>

        <div className='flex w-[40px] sm:w-[30px] lg:w-[77.5px] h-px bg-[#28574E]  flex-shrink-0'></div>

        <div className='flex items-center gap-2 flex-shrink-0'>
          <p className='w-7 h-7 rounded-full bg-[#28574E]  text-white text-[14px] flex items-center justify-center flex-shrink-0'>2</p>
          <span className='text-[#28574E]    sm:text-[16px] font-medium '>OTP</span>
        </div>

        <div className='flex w-[40px] sm:w-[30px] lg:w-[77.5px] h-px bg-[#28574E]  flex-shrink-0'></div>

        <div className='flex items-center gap-2 flex-shrink-0'>
          <p className='w-7 h-7 rounded-full bg-[#28574E]  text-white text-[14px] flex items-center justify-center flex-shrink-0'>3</p>
          <span className='text-[#28574E]  text-[14px] sm:text-[16px] font-medium'>Set Up</span>
        </div>
      </div>


        <form onSubmit={handleSignupPasswordSubmit} className='py-5' >
        <div className='mt-2'>
            <h1 className='text-[28px] text-[#141313]'>Set Up Password</h1>
            <p className='text-[18px] text-[#757575] '>finalise your security credentials.</p>
        </div>

        <div className='mt-6 relative'>
            <label className='text-[18px] text-[#0C0C0C]' htmlFor="password">Password</label>
            <Input onChange={handleSignupPasswordChange} value={signupPasswordData.password} className='mt-2 text-[#757575] text-[16px]' name='password' id='password' type={showPassword? "text" : "password"} placeholder='Enter Your Password' />
            <span onClick={()=> setShowPassword (!showPassword)} className="absolute right-3 sm:right-4 top-12 cursor-pointer ">{showPassword ? <FaRegEye /> :<FaEyeSlash />}</span>
            {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}

        </div>

        <div className='mt-6 relative'>
            <label className='text-[18px] text-[#0C0C0C]' htmlFor="confirmPassword">Confirm Password</label>
            <Input onChange={handleSignupPasswordChange} className='mt-2 text-[#757575] text-[16px]' name='confirmPassword' id='confirmPassword' type={showConfirmPassword? "text" : "password"}  value={signupPasswordData.confirmPassword} placeholder='Confirm Your Password' />
            <span onClick={()=> setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 sm:right-4 top-12 cursor-pointer ">{showConfirmPassword ? <FaRegEye /> :<FaEyeSlash />}</span>
             {errors.confirmPassword && <p className='text-red-500 text-sm'>{errors.confirmPassword}</p>}

        </div>

       
        <div className='flex items-center gap-2 mt-4'>
            <input onChange={handleSignupPasswordChange} id='terms' checked={signupPasswordData.terms} className='w-5 h-5 cursor-pointer' name='terms' type='checkbox'  />
            <div className=''>
            <label htmlFor='terms' className='text-[18px]'> I agree to the  <Link className='text-[#28574E]' to="">Terms of Service</Link> and <Link className='text-[#28574E]' to="">Privacy Policy </Link> </label>
             {errors.terms && <p className='text-red-500 text-sm mt-1'>{errors.terms}</p>}

            </div>

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
