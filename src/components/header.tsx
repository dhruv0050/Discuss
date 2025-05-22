import React from 'react'
import { Input } from './ui/input'
import { auth } from '@/auth'
import AuthHeader from './auth-header'




const HeaderPage = async () => {
    const session = await auth()
    return (
        <div className='grid grid-cols-3 h-14 items-center'>
            <div className='flex justify-start'>
                <h1>Discuss</h1>
            </div>
            <div className='flex justify-center'>
                <Input type='text' placeholder='Search Posts....' />
            </div>
            <div className='flex justify-end gap-2'>
        <AuthHeader/>
            </div>
        </div>
    )
}

export default HeaderPage
