import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'

const PostList = () => {
  return (
    <div className='flex flex-col gap-2'>
      {
        [1,2].map((post,index) =>(
            <Card key={index} className='w-full'>
                <CardHeader>
                    <CardTitle>
                        {"Dsa New post"}
                    </CardTitle>
                    <CardDescription className='flex items-center justify-between'>
                        <h1>By Dhruv</h1>
                        <h1>0 comments</h1>
                    </CardDescription>
                </CardHeader>
            </Card>
        ))
      }
    </div>
  )
}

export default PostList
