import React from 'react'
import ActivateLayout from '../Layout/ActivateLayout'
import Button from '../Components/Button'

export default function ActivateAccount() {
  return (
    <ActivateLayout heading='Your Account is Ready.'
    subHeading='Account activation complete. You can now access appointments, records, and 24/7 medical support.'
    button={
        <Button type="submit" content='Go to Dashboard' />
    }
    >

    </ActivateLayout>
    
  )
}
