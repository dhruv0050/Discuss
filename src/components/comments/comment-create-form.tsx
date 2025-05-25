import React from 'react'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'

const CommentCreateForm = () => {
  return (
    <div>
      <Button size={'sm'} variant={'link'}>Reply</Button>
      <form action="" className='space-y-2 mt-2'>
        <Textarea placeholder='Write a comment...' className='bg-gray-100 focus-visible:ring-0' />
        <Button type='submit' size={'sm'}
        variant={'secondary'} className='mt-2'>Save</Button>
      </form>
    </div>
  )
}

export default CommentCreateForm
