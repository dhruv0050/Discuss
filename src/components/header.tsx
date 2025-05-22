import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import {signIn} from "@/app/actions/sign-in"


const HeaderPage = () => {
  return (
    <div className='grid grid-cols-3 h-14 items-center'>
        <div className='flex justify-start'>
            <h1>Discuss</h1>
        </div>
        <div className='flex justify-center'>
            <Input type='text' placeholder='Search Posts....' />
        </div>
        <div className='flex justify-end gap-2'>
            <form action={signIn}>

            <Button variant='outline' className='bg-blue-500 text-white'>SignIn</Button>
            </form>
            <form action={signIn}>
            <Button className='bg-blue-500 text-white'>SignUp</Button>

            </form>
        </div>
    </div>
  )
}

export default HeaderPage
