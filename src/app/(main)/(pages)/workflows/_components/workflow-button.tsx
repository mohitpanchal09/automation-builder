"use client"
import { Button } from '@/components/ui/button'
import { useModal } from '@/providers/modal-provider'
import { Plus } from 'lucide-react'
import React from 'react'

type Props={}

const WorkflowButton = (props:Props) => {

    const {setOpen,setClose} = useModal()

    const handleClick =()=>{

    }
  return (
    <Button size={'icon'} onClick={handleClick}>
        <Plus/>
    </Button>
  )
}

export default WorkflowButton