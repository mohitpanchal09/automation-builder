import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { useModal } from "@/providers/modal-provider"

import React from 'react'

type Props = {
    title:string,
    subHeading:string,
    defaultOpen?:boolean,
    children:React.ReactNode
}

const CustomModal = ({title,subHeading,defaultOpen,children}: Props) => {
    const {isOpen,setClose} = useModal()
    const handleClose =()=>setClose()
  return (
    <Drawer open={isOpen} onClose={handleClose}>
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle className="text-center">
                    {title}
                </DrawerTitle>
                <DrawerDescription className="text-center flex flex-col items-center gap-4 h-96 overscroll-scroll">
                    {subHeading}
                    {children}
                </DrawerDescription>
            </DrawerHeader>
        </DrawerContent>
    </Drawer>
  )
}

export default CustomModal