import React from 'react'
import ActivateLayout from '../Layout/ActivateLayout'
import Button from '../Components/Button'
import { useNavigate } from 'react-router'

export default function PasswordReset() {
    const navigate = useNavigate()

    const handleLogin = ()=>{
        navigate("/login")
    }
  return (
    <ActivateLayout heading='Password Reset Successful”'
    subHeading='“You can now log in with your new password.”'
    button={
        <Button onClick={handleLogin} type='submit' content='Login' className='text-[18px] text-white' />
    }
    >

    </ActivateLayout>
   
  )
}
