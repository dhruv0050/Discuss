import React from 'react'
import CommentShow from './comment-show'
import { fetchCommentByPostId } from '@/lib/query/comment'

type CommentListProps = {
    postId: string
}

const CommentList: React.FC<CommentListProps> = async ({postId}) => {
    const comments = await fetchCommentByPostId(postId)
    const topLevelComments = comments.filter((comment) => comment.parentId === null)
    
    return (
        <div 
            className='rounded-lg p-6 space-y-6'
            style={{ backgroundColor: '#2A2438' }}
        >
            {/* Header Section */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <div 
                        className='w-8 h-8 rounded-full flex items-center justify-center'
                        style={{ backgroundColor: '#8B5CF6' }}
                    >
                        <svg className='w-4 h-4' fill='#EDE9FE' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z' clipRule='evenodd' />
                        </svg>
                    </div>
                    <div>
                        <h1 
                            className='font-bold text-xl'
                            style={{ color: '#EDE9FE' }}
                        >
                            Discussion
                        </h1>
                        <p 
                            className='text-sm'
                            style={{ color: '#A78BFA' }}
                        >
                            {topLevelComments.length} {topLevelComments.length === 1 ? 'comment' : 'comments'}
                        </p>
                    </div>
                </div>
                
                {/* Sort Options */}
                <div className='flex items-center gap-2'>
                    <span 
                        className='text-sm font-medium'
                        style={{ color: '#A78BFA' }}
                    >
                        Sort by:
                    </span>
                    <select 
                        className='text-sm px-3 py-1 rounded-md border transition-all duration-200 focus:outline-none focus:ring-2'
                        style={{ 
                            backgroundColor: '#1E1B2E',
                            borderColor: '#3F3C5B',
                            color: '#EDE9FE'
                        }}
                    >
                        <option value="newest">Newest first</option>
                        <option value="oldest">Oldest first</option>
                        <option value="popular">Most popular</option>
                    </select>
                </div>
            </div>
            
            <div 
                className='h-px w-full'
                style={{ backgroundColor: '#3F3C5B' }}
            />
            
            {/* Comments Section */}
            {topLevelComments.length === 0 ? (
                <div 
                    className='text-center py-12 rounded-lg border-2 border-dashed'
                    style={{ 
                        borderColor: '#3F3C5B',
                        backgroundColor: '#1E1B2E'
                    }}
                >
                    <div 
                        className='w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'
                        style={{ backgroundColor: '#3F3C5B' }}
                    >
                        <svg className='w-8 h-8' fill='#A78BFA' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z' clipRule='evenodd' />
                        </svg>
                    </div>
                    <h3 
                        className='text-lg font-medium mb-2'
                        style={{ color: '#EDE9FE' }}
                    >
                        No comments yet
                    </h3>
                    <p 
                        className='text-sm mb-4'
                        style={{ color: '#A78BFA' }}
                    >
                        Be the first to share your thoughts on this post!
                    </p>
                    <button 
                        className='px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 hover:scale-105'
                        style={{ 
                            backgroundColor: '#8B5CF6',
                            color: '#EDE9FE'
                        }}
                    >
                        Start the conversation
                    </button>
                </div>
            ) : (
                <div className='space-y-4'>
                    {topLevelComments.map((comment, index) => (
                        <div key={comment.id} className='relative'>
                            {/* Thread Line */}
                            {index < topLevelComments.length - 1 && (
                                <div 
                                    className='absolute left-4 top-12 bottom-0 w-px'
                                    style={{ backgroundColor: '#3F3C5B' }}
                                />
                            )}
                            
                            {/* Comment Container */}
                            <div 
                                className='rounded-lg border transition-all duration-200 hover:scale-[1.01]'
                                style={{ 
                                    backgroundColor: '#1E1B2E',
                                    borderColor: '#3F3C5B'
                                }}
                            >
                                <CommentShow 
                                    key={comment.id} 
                                    postId={comment.postId} 
                                    commentId={comment.id}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
            
            {/* Footer Stats */}
            {topLevelComments.length > 0 && (
                <>
                    <div 
                        className='h-px w-full'
                        style={{ backgroundColor: '#3F3C5B' }}
                    />
                    <div className='flex items-center justify-center'>
                        <div 
                            className='flex items-center gap-2 px-4 py-2 rounded-full text-sm'
                            style={{ 
                                backgroundColor: '#1E1B2E',
                                color: '#A78BFA'
                            }}
                        >
                            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd' />
                            </svg>
                            {topLevelComments.length} top-level {topLevelComments.length === 1 ? 'comment' : 'comments'}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default CommentList