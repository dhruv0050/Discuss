import React from 'react'
import { auth } from '@/auth'
import AuthHeader from './auth-header'
import SearchInput from './search-input'

const HeaderPage = async () => {
    const session = await auth()
    return (
        <div className='grid grid-cols-3 h-14 items-center'>
            <div className='flex justify-start'>
                <h1>Discuss</h1>
            </div>
            <div className='flex justify-center'>
                <SearchInput/>
            </div>
            <div className='flex justify-end gap-2'>
        <AuthHeader/>
            </div>
        </div>
    )
}

export default HeaderPage
