'use client'
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import React from 'react'

function Profile() {


  return (
    <div>Profile
      <Button onClick={() => signOut({
      callbackUrl: '/', // Redirect to this URL after sign out
    })}>Sign Out</Button>
    </div>
  )
}

export default Profile