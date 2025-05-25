import { prisma } from '@/lib'
import { notFound } from 'next/navigation'
import React from 'react'

type PostShowProps = {
  postId: string 
}

const PostShow: React.FC<PostShowProps> = async ({postId}) => {
    const post = await prisma.post.findFirst({
        where: {
            id: postId
        }
    })
    
    if(!post) notFound()
    
    return (
        <div 
            className='rounded-lg p-6 space-y-6'
            style={{ backgroundColor: '#2A2438' }}
        >
            {/* Post Header */}
            <div className='space-y-3'>
                <h1 
                    className='font-bold text-3xl leading-tight'
                    style={{ color: '#EDE9FE' }}
                >
                    {post.title}
                </h1>
                <div 
                    className='h-px w-full'
                    style={{ backgroundColor: '#3F3C5B' }}
                />
            </div>
            
            {/* Post Content */}
            <div 
                className='rounded-lg p-6 border'
                style={{ 
                    backgroundColor: '#1E1B2E',
                    borderColor: '#3F3C5B'
                }}
            >
                <div 
                    className='prose prose-lg max-w-none'
                    style={{ color: '#EDE9FE' }}
                >
                    {post.content.split('\n').map((paragraph, index) => (
                        <p key={index} className='mb-4 leading-relaxed'>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PostShow