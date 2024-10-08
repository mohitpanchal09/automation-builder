import ProfileForm from '@/components/forms/profile-form'
import React from 'react'
import ProfilePicture from './_components/profile-picture'
import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'
type Props = {}

async function page(props: Props) {
  const authUser = await currentUser()
  if(!authUser) return null;

  const user = await db.user.findUnique({ where: { clerkId: authUser.id } })
  const removeProfileImage = async () => {
    'use server'
    const response = await db.user.update({
      where: {
        clerkId: authUser.id
      }, data: {
        profileImage: ''
      }
    })
    return response
  }

  const uploadProfileImage = async (image: string) => {
    'use server'
    const id = authUser.id
    const response = await db.user.update({
      where: {
        clerkId: id,
      },
      data: {
        profileImage: image,
      },
    })

    return response
  }

  const updateUserInfo = async (name: string) => {
    'use server'

    const updateUser = await db.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        name,
      },
    })
    return updateUser
  }

  return (
    <div className='flex flex-col gap-4'>   <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
      <span>Settings</span>
    </h1>
      <div className='flex flex-col p-6 gap-10'>
        <div>
          <h2 className='text-2xl font-bold'>User Profile</h2>
          <p className='text-base text-white/50'>Add or update your information</p>
        </div>
        <ProfilePicture
          onDelete={removeProfileImage}
          userImage={user?.profileImage || ""}
          onUpload={uploadProfileImage}
        ></ProfilePicture>
        <ProfileForm />
      </div>
    </div>
  )
}

export default page