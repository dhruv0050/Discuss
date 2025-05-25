"use client"
import { useSession } from 'next-auth/react'
import React from 'react'
import { LogOut, Github, User } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { signIn } from "@/actions/sign-in"
import { signOut } from "@/actions/sign-out"

const AuthHeader = () => {
    const session = useSession()
    if(session.status === "loading") return (
        <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-[#2A2438] animate-pulse"></div>
        </div>
    )

    let authContent: React.ReactNode

    if (session.data?.user) {
        authContent = (
            <Popover>
                <PopoverTrigger asChild>
                    <div className="relative cursor-pointer group">
                        <Avatar className="w-10 h-10 border-2 border-[#3F3C5B] hover:border-[#8B5CF6] transition-all duration-300 hover:shadow-lg hover:shadow-[#8B5CF6]/30">
                            <AvatarImage 
                                src={session.data.user.image || "https://github.com/shadcn.png"} 
                                className="hover:scale-105 transition-transform duration-300"
                            />
                            <AvatarFallback className="bg-[#2A2438] text-[#EDE9FE] border border-[#3F3C5B]">
                                {session.data.user.name?.charAt(0).toUpperCase() || "U"}
                            </AvatarFallback>
                        </Avatar>
                        {/* Online indicator */}
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1E1B2E]"></div>
                    </div>
                </PopoverTrigger>
                <PopoverContent 
                    className="w-64 bg-[#2A2438] border border-[#3F3C5B] shadow-xl shadow-[#8B5CF6]/20"
                    sideOffset={8}
                >
                    <div className="space-y-4">
                        {/* User Info */}
                        <div className="flex items-center space-x-3">
                            <Avatar className="w-12 h-12 border-2 border-[#3F3C5B]">
                                <AvatarImage src={session.data.user.image || "https://github.com/shadcn.png"} />
                                <AvatarFallback className="bg-[#1E1B2E] text-[#EDE9FE]">
                                    {session.data.user.name?.charAt(0).toUpperCase() || "U"}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                                <h1 className="text-[#EDE9FE] font-semibold text-sm truncate">
                                    {session.data.user.name || "Anonymous User"}
                                </h1>
                                <p className="text-purple-300 text-xs truncate">
                                    {session.data.user.email || "No email provided"}
                                </p>
                            </div>
                        </div>
                        
                        <Separator className='bg-[#3F3C5B]' />
                                                
                        {/* Sign Out Button */}
                        <form action={signOut} className="w-full">
                            <Button 
                                type='submit' 
                                variant="ghost"
                                className='w-full justify-start text-[#EDE9FE] hover:bg-[#3F3C5B] hover:text-red-400 transition-colors duration-300 group'
                            >
                                <LogOut className="w-4 h-4 mr-2 group-hover:text-red-400 transition-colors duration-300" />
                                Sign Out
                            </Button>
                        </form>
                    </div>
                </PopoverContent>
            </Popover>
        )
    } else {
        authContent = (
            <div className="flex items-center space-x-3">
                
                {/* Sign Up Button */}
                <form action={signIn}>
                    <Button 
                        className='bg-[#8B5CF6] hover:bg-[#7C3AED] text-white border-0 transition-all duration-300 hover:shadow-lg hover:shadow-[#8B5CF6]/40 hover:-translate-y-0.5 group'
                    >
                        <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                        Sign Up
                    </Button>
                </form>
            </div>
        )
    }
    
    return authContent
}

export default AuthHeader