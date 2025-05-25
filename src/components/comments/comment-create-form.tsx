"use client"
import React, { useActionState, useState } from 'react'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { createComment } from '@/actions/create-comment'
import { Loader2 } from 'lucide-react'

type CommentCreateFormProps = {
    postId: string,
    parentId?: string,
    startOpen?: boolean
}

const CommentCreateForm: React.FC<CommentCreateFormProps> = ({ postId, parentId, startOpen }) => {
    const [open, setOpen] = useState(startOpen)
    const [formState, action, isPending] = useActionState(createComment.bind(null, { postId, parentId }), { errors: {} })
    
    return (
        <div className='space-y-3'>
            <Button 
                size={'sm'} 
                variant={'link'} 
                onClick={() => setOpen(!open)}
                className='p-0 h-auto font-medium transition-all duration-200 hover:scale-105'
                style={{ 
                    color: '#8B5CF6',
                    textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#7C3AED'
                    e.currentTarget.style.textDecoration = 'underline'
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#8B5CF6'
                    e.currentTarget.style.textDecoration = 'none'
                }}
            >
                <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z' clipRule='evenodd' />
                </svg>
                {open ? 'Cancel' : 'Reply'}
            </Button>
            
            {open && (
                <div 
                    className='rounded-lg p-4 border transition-all duration-300 animate-in slide-in-from-top-2'
                    style={{ 
                        backgroundColor: '#2A2438',
                        borderColor: '#3F3C5B'
                    }}
                >
                    <form action={action} className='space-y-4'>
                        <div className='space-y-2'>
                            <label 
                                htmlFor='comment-content'
                                className='text-sm font-medium'
                                style={{ color: '#EDE9FE' }}
                            >
                                Add a comment
                            </label>
                            <Textarea
                                id='comment-content'
                                name='content'
                                placeholder='What are your thoughts? Share your perspective...'
                                rows={3}
                                className='transition-all duration-200 focus:scale-[1.01] resize-none'
                                style={{ 
                                    backgroundColor: '#1E1B2E',
                                    borderColor: '#3F3C5B',
                                    color: '#EDE9FE'
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = '#8B5CF6'
                                    e.target.style.boxShadow = '0 0 0 2px rgba(139, 92, 246, 0.2)'
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = '#3F3C5B'
                                    e.target.style.boxShadow = 'none'
                                }}
                            />
                            
                            {formState.errors.content && (
                                <div className='flex items-center gap-2 text-sm p-2 rounded-md' style={{ backgroundColor: '#7F1D1D', color: '#FCA5A5' }}>
                                    <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z' clipRule='evenodd' />
                                    </svg>
                                    {formState.errors.content}
                                </div>
                            )}
                        </div>
                        
                        {formState.errors.formError && (
                            <div 
                                className='border p-3 rounded-lg flex items-start gap-2' 
                                style={{ 
                                    borderColor: '#DC2626', 
                                    backgroundColor: '#7F1D1D', 
                                    color: '#FCA5A5' 
                                }}
                            >
                                <svg className='w-5 h-5 mt-0.5 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                                    <path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z' clipRule='evenodd' />
                                </svg>
                                <div>
                                    <p className='font-medium'>Error</p>
                                    <p className='text-sm'>{formState.errors.formError}</p>
                                </div>
                            </div>
                        )}
                        
                        <div className='flex items-center justify-between pt-2'>
                            <div 
                                className='text-xs'
                                style={{ color: '#A78BFA' }}
                            >
                                {parentId ? 'Replying to comment' : 'Commenting on post'}
                            </div>
                            
                            <div className='flex gap-2'>
                                <Button 
                                    type='button'
                                    size={'sm'} 
                                    variant={'ghost'}
                                    onClick={() => setOpen(false)}
                                    className='transition-all duration-200'
                                    style={{ 
                                        color: '#A78BFA',
                                        backgroundColor: 'transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#3F3C5B'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent'
                                    }}
                                >
                                    Cancel
                                </Button>
                                
                                <Button 
                                    type='submit'
                                    disabled={isPending} 
                                    size={'sm'}
                                    className='font-medium transition-all duration-200 hover:scale-105 disabled:hover:scale-100'
                                    style={{ 
                                        backgroundColor: isPending ? '#6B46C1' : '#8B5CF6',
                                        color: '#EDE9FE',
                                        border: 'none'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isPending) {
                                            e.currentTarget.style.backgroundColor = '#7C3AED'
                                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 92, 246, 0.3)'
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isPending) {
                                            e.currentTarget.style.backgroundColor = '#8B5CF6'
                                            e.currentTarget.style.boxShadow = 'none'
                                        }
                                    }}
                                >
                                    {isPending ? (
                                        <>
                                            <Loader2 className='w-4 h-4 mr-2 animate-spin' />
                                            Posting...
                                        </>
                                    ) : (
                                        <>
                                            <svg className='w-4 h-4 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                                                <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' />
                                            </svg>
                                            Post Comment
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export default CommentCreateForm