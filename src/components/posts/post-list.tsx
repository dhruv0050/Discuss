import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { PostWithData } from '@/lib/query/post'

type PostListProps = {
    fetchData: () => Promise<PostWithData[]>
}

const PostList: React.FC<PostListProps> = async ({fetchData}) => {
    const posts = await fetchData()
    
    return (
        <div className='flex flex-col gap-4 p-4'>
            {posts.length === 0 ? (
                <div 
                    className='text-center py-12 rounded-lg border'
                    style={{ 
                        backgroundColor: '#2A2438',
                        borderColor: '#3F3C5B',
                        color: '#EDE9FE'
                    }}
                >
                    <p className='text-lg font-medium mb-2'>No posts yet</p>
                    <p style={{ color: '#A78BFA' }}>Be the first to create a post in this topic!</p>
                </div>
            ) : (
                posts.map((post) => (
                    <Card 
                        key={post.id} 
                        className='w-full transition-all duration-200 hover:scale-[1.02] cursor-pointer'
                        style={{ 
                            backgroundColor: '#2A2438',
                            borderColor: '#3F3C5B',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                        }}
                    >
                        <CardHeader className='pb-3'>
                            <CardTitle 
                                className='text-lg font-semibold leading-tight hover:underline'
                                style={{ color: '#EDE9FE' }}
                            >
                                {post.title}
                            </CardTitle>
                            <CardDescription className='flex items-center justify-between pt-2'>
                                <div className='flex items-center gap-2'>
                                    <div 
                                        className='w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium'
                                        style={{ 
                                            backgroundColor: '#8B5CF6',
                                            color: '#EDE9FE'
                                        }}
                                    >
                                        {post.user.name?.charAt(0).toUpperCase() || 'U'}
                                    </div>
                                    <span style={{ color: '#A78BFA' }}>
                                        By {post.user.name || 'Anonymous'}
                                    </span>
                                </div>
                                <div 
                                    className='flex items-center gap-1 text-sm'
                                    style={{ color: '#C4B5FD' }}
                                >
                                    <svg 
                                        className='w-4 h-4' 
                                        fill='currentColor' 
                                        viewBox='0 0 20 20'
                                    >
                                        <path 
                                            fillRule='evenodd' 
                                            d='M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z' 
                                            clipRule='evenodd' 
                                        />
                                    </svg>
                                    {post._count.comments} {post._count.comments === 1 ? 'comment' : 'comments'}
                                </div>
                            </CardDescription>
                        </CardHeader>
                    </Card>
                ))
            )}
        </div>
    )
}

export default PostList