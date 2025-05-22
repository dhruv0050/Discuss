"use client"
import { useSession } from 'next-auth/react'
import React from 'react'
import { LogOut } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { signIn } from "@/app/actions/sign-in"
import { signOut } from "@/app/actions/sign-out"
import { auth } from '@/auth'

const AuthHeader = () => {
    const session = useSession()
    // if(!session.data?.user) return null

    let authContent: React.ReactNode

    if (session.data?.user) {
        authContent = (

            <Popover>
                <PopoverTrigger asChild>
                    <Avatar>
                        <AvatarImage src={session.data.user.image || "https://github.com/shadcn.png"} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </PopoverTrigger>
                <PopoverContent>
                    <h1>{session.data.user.name}</h1>
                    <Separator className='my-2' />
                    <form action={signOut}>
                        <Button type='submit'><LogOut />Sign Out</Button>
                    </form>
                </PopoverContent>
            </Popover>
        )
    } else {
        authContent = (
        <>
            <form action={signIn}>
                <Button variant='outline' className='bg-blue-500 text-white'>SignIn</Button>
            </form>
            <form action={signIn}>
                <Button className='bg-blue-500 text-white'>SignUp</Button>
            </form>
        </>
        )
    }
    return (
        authContent
    )
}

export default AuthHeader



