import React from 'react'
import { auth } from '@/auth'
import AuthHeader from './auth-header'
import SearchInput from './search-input'
import { MessageCircle, Sparkles } from 'lucide-react'
import Link from 'next/link'

const HeaderPage = async () => {
    const session = await auth()
    
    return (
        <header className='sticky top-0 z-50 bg-[#1E1B2E]/95 backdrop-blur-lg border-b border-[#3F3C5B] shadow-lg shadow-[#8B5CF6]/10'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-3 h-16 items-center'>
                    {/* Logo Section */}
                    <div className='flex justify-start items-center'>
                        <Link 
                            href="/" 
                            className='flex items-center space-x-2 group hover:scale-105 transition-transform duration-300'
                        >
                            <div className="relative">
                                <div className="w-8 h-8 rounded-lg bg-[#8B5CF6] flex items-center justify-center shadow-lg shadow-[#8B5CF6]/50 group-hover:shadow-[#8B5CF6]/70 transition-all duration-300">
                                    <MessageCircle className="w-5 h-5 text-white" />
                                </div>
                                {/* Sparkle effect on hover */}
                                <Sparkles className="w-3 h-3 text-[#8B5CF6] absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <h1 className='text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] via-[#C084FC] to-[#DDD6FE] bg-clip-text text-transparent'>
                                Discuss
                            </h1>
                        </Link>
                        
                        {/* Optional: Beta Badge */}
                        <div className="ml-3 hidden sm:block">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#8B5CF6]/20 text-[#C084FC] border border-[#8B5CF6]/30">
                                Beta
                            </span>
                        </div>
                    </div>
                    
                    {/* Search Section */}
                    <div className='flex justify-center'>
                        <div className="w-full max-w-md">
                            <SearchInput />
                        </div>
                    </div>
                    
                    {/* Auth Section */}
                    <div className='flex justify-end items-center gap-2'>
                        {/* Optional: Quick Stats for logged-in users */}
                        {session?.user && (
                            <div className="hidden lg:flex items-center space-x-4 mr-4 text-sm text-purple-300">
                                <div className="flex items-center space-x-1">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span>Online</span>
                                </div>
                            </div>
                        )}
                        
                        <AuthHeader />
                    </div>
                </div>
            </div>
            
            {/* Optional: Progress indicator for page loading */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#8B5CF6]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </header>
    )
}

export default HeaderPage