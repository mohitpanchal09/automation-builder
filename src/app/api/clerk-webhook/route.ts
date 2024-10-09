import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    try{
        const body = await req.json()
        const {id,email_addresses,first_name,image_url} = body.data
        console.log(email_addresses)
        const email = email_addresses[0]?.email_address

        await db.user.upsert({
            where:{clerkId:id},
            update:{
                email:email,
                name:first_name,
                profileImage:image_url
            },
            create:{
                clerkId:id,
                email,
                name:first_name || '',
                profileImage:image_url || ''
            }
        })

        return new NextResponse("User updated successfully in database",{status:200})

    }catch(err){
        console.log("Error updating user ",err)
        return new NextResponse("Error updating the user",{status:500})
    }
}