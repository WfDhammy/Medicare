import React from 'react'
import ActivateLayout from '../Layout/ActivateLayout'
import Button from '../Components/Button'

export default function PasswordReset() {
  return (
    <ActivateLayout heading='Password Reset Successful”'
    subHeading='“You can now log in with your new password.”'
    button={
        <Button type='submit' content='Login' className='text-[18px] text-white' />
    }
    >

    </ActivateLayout>
   
  )
}
