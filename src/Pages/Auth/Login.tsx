import React from 'react'
import AuthLayout from '../../Layout/AuthLayout'
import Input from '../../Components/Input'
import {Link} from 'react-router'
import Button from '../../Components/Button'

type Props = {}

export default function login({}: Props) {
  return (
    <AuthLayout heading= "Welcome Back" subHeading='Access your healthcare records, appointments, and care team.'>
        <form className='py-5' >
          <div className='mt-4'>
            <label className='font-semibold text-[18px]' htmlFor="userId">Hospital Patient ID / User ID</label>
            <Input id='userId' type="text" className='block mt-2' placeholder='Enter your patient ID' />

          </div>
          <div className='mt-4'>
            <label className='font-semibold text-[18px] ' htmlFor="password">Password</label>
            <Input id='password' type="password" className='block mt-2' placeholder='Enter your password' />

          </div>

          <div className='mt-4'>
            <Link className='' to=""><span className='text-[#28574E] font-medium'>Forgot password?</span></Link>

          </div>

          <div className='mt-6'>
            <Button className='' content='Sign In' type='submit' />

          </div>


            <p className='mt-6 text-center'>First time here? <Link to='/signup' ><span className='text-[#28574E] font-medium'>Activate Account</span></Link> </p>

        </form>
    </AuthLayout>
  )
}