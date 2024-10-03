"use client"
import { EditUserProfileSchema } from '@/lib/types'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'
function ProfileForm() {
    const [isLoading, setIsLoading] = useState(true)
    const form = useForm<z.infer<typeof EditUserProfileSchema>>({
        mode: 'onChange',
        defaultValues: {
            email: '',
            name: ''
        }
    })
    return (
        <Form {...form}>
            <form className='flex flex-col gap-6' onSubmit={()=>{}}>
                <FormField control={form.control} name="name" disabled={isLoading}
                
                    render={({field})=>(
                        <FormItem>
                            <FormLabel className='text-lg'>
                                User Full Name
                            </FormLabel>
                            <FormControl>
                                <Input placeholder='Name' {...field}/>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField control={form.control} name="email" disabled={true}
                
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-lg'>
                            Email
                        </FormLabel>
                        <FormControl>
                            <Input placeholder='Email' {...field} type='email'/>
                        </FormControl>
                    </FormItem>
                )}
            />
            <Button className='self-start hover:bg-[#2F006B] hover:text-white'>
                {isLoading ?<>
                <Loader2 className='mr-2 h-4 w-4 animate-spin'/> Saving  </>:'Save User Settings'}
            </Button>
            </form>
        </Form>
    )
}

export default ProfileForm