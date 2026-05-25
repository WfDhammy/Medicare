import React, {useState} from 'react'
import Button from './Button'
import {Link, useNavigate} from "react-router"
import Logo from "../assets/MediCare.svg"
import { HiMenu } from "react-icons/hi";

type Props = {
    

}

export default function Header({}: Props) {
    const navigate = useNavigate()
    const handleActivate = ()=>{
        navigate("/signup")
    }
  return (
    <header className='w-full flex items-center justify-center mt-2 md:mt-4 px-4 '>
        <div className='flex w-full md:w-[1249px] h-auto md:h-[98px] bg-[#FFFFFF] justify-between md:justify-around items-center border rounded-full px-4 md:px-6 py-3 md:py-0 shadow-sm'>
        <div className='flex-shrink-0'>
            <img className='w-[100px] md:w-auto' src={Logo} alt="" />
        </div>
        <nav className='hidden md:flex gap-4 lg:gap-6  '>
            <Link className='hover:text-[#28574E] text-[16px] lg:text-[18px] text-[#3E3B3B]' to="/">Home</Link>
            <Link className='hover:text-[#28574E] text-[16px] lg:text-[18px] text-[#3E3B3B]' to="">Department</Link>
            <Link className='hover:text-[#28574E] text-[16px] lg:text-[18px] text-[#3E3B3B]' to="">Ai Support</Link>
            <Link className='hover:text-[#28574E] text-[16px] lg:text-[18px] text-[#3E3B3B]' to="">About Us</Link>
        </nav>
        <div className='flex gap-2 md:gap-4 items-center text-[14px] md:text-[18px] flex-shrink-0'>
            <a className='flex md:hidden text-[#3E3B3B] hover:text-[#28574E]' href=""> <HiMenu /> </a>
            <Link className='hover:text-[#28574E] transition-colors duration-300 whitespace-nowrap hidden sm:inline' to="/login">Login</Link>
            <div className='w-[100px] sm:w-[120px] md:w-[160px] lg:w-[184px]' >
            <Button onClick={handleActivate} type='submit' content='Activate Account'/>
                
            </div>
        </div>

        </div>
    </header>
  )
}