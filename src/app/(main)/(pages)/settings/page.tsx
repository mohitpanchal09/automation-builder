import ProfileForm from '@/components/forms/profile-form'
import React from 'react'
import ProfilePicture from './_components/profile-picture'

type Props = {}

function page(props: Props) {
  return (
    <div className='flex flex-col gap-4'>   <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
      <span>Settings</span>
    </h1>
    <div className='flex flex-col p-6 gap-10'>
      <h2 className='text-2xl font-bold'>User Profile</h2>
      <p className='text-base t0'>Add or update your information</p>
      <ProfilePicture></ProfilePicture>
      <ProfileForm/>
    </div>
    </div>
  )
}

export default page