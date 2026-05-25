import React, {useState} from 'react'
import RegisterLayout from '../../Layout/RegisterLayout'
import Icon from "../../assets/Icon.svg"
import image from "../../assets/1st signup Image.svg";
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { Link, useNavigate } from 'react-router';



interface SignupData{
  patientId: string,
  email: string,
  mNumber: number | string
}
interface Error{
  patientId: string,
  email: string,
  mNumber: number | string
}


export default function Signup({}: Props) {
  const [signupData, setSignupData] = useState<SignupData>({
    patientId: "",
    email: "",
    mNumber: ""
    
  })
  const [errors, setErrors] = useState<Error>({
    patientId: "",
    email: "", 
    mNumber: ""
  })
  const navigate = useNavigate()

  const handleSignupChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target;

    setSignupData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateSignup = ()=>{
    const {patientId, email, mNumber} = signupData;
    const newErrors: Error = {
      patientId: "",
      email: "",
      mNumber: "",
    };

    const emailRegex = /^\S+@\S+\.\S+$/;
    const phoneRegex = /^[0-9]{10}$/; 


  
    if(!patientId.trim()){
      newErrors.patientId = "PatientId is required"
    }else if (patientId.trim().length < 3) {
      newErrors.patientId = "Patient ID must be at least 3 characters"
    }

    if(!email.trim()){
      newErrors.email = "Email is required"
    }else if (!emailRegex.test(email)){
      newErrors.email = "Invalid email address"
    }
    
    if (!mNumber.trim()){
      newErrors.mNumber = "Registered Phone Number is required"
    }else if(!phoneRegex.test(mNumber.toString())){
      newErrors.mNumber = "Invalid mobile number (10 digits required)"
    }


    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === "")
  }

  const handleSignupSubmit = (event : React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    if(!validateSignup())return;
    console.log("Form Submitted", signupData);
    setSignupData({
      patientId: "",
      email: "",
      mNumber: ""
    })
    navigate("/signupVerifyCode")
  }


  return (
    <RegisterLayout image={image} heading="Access your care anytime" subHeading='Manage appointments, view medical information, chat with your care team, and receive support in one place.' ul={
      <ul className='flex flex-col gap-3'> 
        <li className='flex gap-[16px] text-[16px] items-center'><span><img src={Icon} alt="" /></span>Book and manage appointments</li>
        <li className='flex gap-[16px] text-[16px] items-center'><span><img src={Icon} alt="" /></span>Access visit history</li>
        <li className='flex gap-[16px] text-[16px] items-center'><span><img src={Icon} alt="" /></span>Message your healthcare team</li>
        <li className='flex gap-[16px] text-[16px] items-center'><span><img src={Icon} alt="" /></span>AI support assistance</li>
        <li className='flex gap-[16px] text-[16px]items-center'><span><img src={Icon} alt="" /></span>Appointment reminders</li>
      </ul>
    }
    >
      <div className='w-full'>
      <div className='flex items-center justify-between w-full gap-2 overflow-x-auto'>
        <div className='flex items-center gap-2 flex-shrink-0'>
          <p className='w-7 h-7 rounded-full bg-[#28574E] text-white text-[14px] flex items-center justify-center flex-shrink-0'>1</p>
          <span className='text-[#28574E] text-[14px] sm:text-[16px] font-medium'>Identity</span>
        </div>

        <div className='flex w-[40px] sm:w-[77.5px] h-px bg-gray-300 flex-shrink-0'></div>

        <div className='flex items-center gap-2 flex-shrink-0'>
          <p className='w-7 h-7 rounded-full bg-gray-200 text-gray-500 text-[14px] flex items-center justify-center flex-shrink-0'>2</p>
          <span className='text-gray-400   sm:text-[16px] font-medium '>OTP</span>
        </div>

        <div className='flex w-[40px] sm:w-[77.5px] h-px bg-gray-300 flex-shrink-0'></div>

        <div className='flex items-center gap-2 flex-shrink-0'>
          <p className='w-7 h-7 rounded-full bg-gray-200 text-gray-500 text-[14px] flex items-center justify-center flex-shrink-0'>3</p>
          <span className='text-gray-400 text-[14px] sm:text-[16px] font-medium'>Set Up</span>
        </div>
      </div>

      <form onSubmit={handleSignupSubmit} className='py-5' >
        <div className='gap-5'>
        <h1 className='text-[#28574E] text-[28px]'>Activate your account</h1>
        <p className='text-[#3E3B3B] text-[18px]'>Verify your hospital details to set up portal access.</p>
        </div>

        <div className='mt-6'>

        <label className='text-[18px] mt-10 font-semibold' htmlFor="hospitalPatientId">Hospital Patient ID / User ID</label>
        <Input id='patientId' type='text' onChange={handleSignupChange} value={signupData.patientId} placeholder='Enter Patient ID' name='patientId' className='block mt-2' />
        {errors.patientId && <p className='text-red-500 text-sm'>{errors.patientId}</p>}
        </div>

        <div className='mt-4'>
        <label className='text-[18px] font-semibold' htmlFor="email">Email Address </label>
        <Input id='email' type='text' name='email' onChange={handleSignupChange} value={signupData.email} placeholder='Enter your email address' className='block mt-2' />
        {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
        </div>

        <div className='mt-4'>
        <label className='text-[18px] font-semibold' htmlFor="mNumber">Registered Phone Number</label>
        <Input id='mNumber' name='mNumber' type='tel' onChange={handleSignupChange} value={signupData.mNumber} placeholder='(+234) 000-0000' className='block mt-2' />
        {errors.mNumber && <p className='text-red-500 text-sm'>{errors.mNumber}</p>}
        </div>

        <Button className='text-[18px] mt-6' type='submit' content='Verify Identity →' />


        <p className='text-[18px] mt-6'>Already have an account?  <Link to='/login' className=' hover:underline text-[#28574E]' >Log In</Link> </p>

        <div className='border-t border-gray-200 mt-8 '></div>

        <footer className='mt-6 text-[18px] text-[#6F797A]'>Need help with your Patient Id? <Link to="" className=' hover:underline text-[#28574E]' >Contact Support</Link> </footer>

      </form>

      </div>
    </RegisterLayout>
  )
}