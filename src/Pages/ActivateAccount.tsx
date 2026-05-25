import React from 'react'
import ActivateLayout from '../Layout/ActivateLayout'
import Button from '../Components/Button'
import { useNavigate } from 'react-router'

export default function ActivateAccount() {
  const navigate = useNavigate()

  const handleDashboard = ()=>{
    navigate("/")
  }
  return (
    <ActivateLayout heading='Your Account is Ready.'
    subHeading='Account activation complete. You can now access appointments, records, and 24/7 medical support.'
    button={
        <Button onClick={handleDashboard} type="submit" content='Go to Dashboard' />
    }
    >

    </ActivateLayout>
    
  )
}
