import React from 'react'
import Logo from "../assets/Medibridge Logo.svg"
import {Link,} from "react-router"

export default function Footer() {
   
  return (
    <footer className='w-full flex items-center justify-center mb-0 bg-[#E2DFDF] '>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-4 md:justify-around flex-shrink-0 px-4 py-4 md:py-0 md:h-[101px]'>
            <div>
                <img src={Logo} alt="" />
            </div>

            
                <nav className='flex-shrink-0 gap-3 lg:gap-4 flex flex-wrap justify-center'>
                    <Link className='text-[14px] lg:text-[16px] text-[#3E3B3B]' to="">Privacy Policy</Link>
                    <Link className='text-[14px] lg:text-[16px] text-[#3E3B3B]' to="">Terms of Service</Link>
                    <Link className='text-[14px] lg:text-[16px] text-[#3E3B3B]'  to="">Support</Link>
                    <Link className='text-[14px] lg:text-[16px] text-[#3E3B3B]' to="">Contact</Link>
                </nav>
                <div className='flex-shrink-0 text-center px-2'>
                    <p  className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] whitespace-normal break-words max-w-[280px] sm:max-w-none">© 2024 MediCare Healthcare. Calm & Trusted Care.</p>
                </div>
            
        </div>
    </footer>
  )
}
