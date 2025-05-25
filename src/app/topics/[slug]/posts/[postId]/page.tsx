// import CommentCreateForm from '@/components/comments/comment-create-form';
// import CommentList from '@/components/comments/comment-list';
// import PostShow from '@/components/posts/post-show';
// import { Button } from '@/components/ui/button';
// import { ChevronLeft } from 'lucide-react';
// import Link from 'next/link';
// import React from 'react'

// type PostShowPageProps = {
//   params: Promise<{ slug: string, postId: string }>
// }

// const PostShowPage: React.FC<PostShowPageProps> = async ({ params }) => {
//   const { slug, postId } = (await params);
//   return (
//     <div className='space-y-4'>
//       <Link href={`/topics/${slug}`}>
//         <Button variant={'link'}><ChevronLeft />
//           Back to {slug}
//         </Button>
//       </Link>
//       <PostShow postId={postId} />
//       <CommentCreateForm postId={postId} startOpen/>
//       <CommentList postId={postId}/>
//     </div>
//   )
// }

// export default PostShowPage


import CommentCreateForm from '@/components/comments/comment-create-form';
import CommentList from '@/components/comments/comment-list';
import PostShow from '@/components/posts/post-show';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

type PostShowPageProps = {
  params: Promise<{ slug: string, postId: string }>
}

const PostShowPage: React.FC<PostShowPageProps> = async ({ params }) => {
  const { slug, postId } = (await params);
  
  return (
    <div 
      className='min-h-screen p-6'
      style={{ backgroundColor: '#1E1B2E' }}
    >
      <div className='max-w-4xl mx-auto space-y-6'>
        {/* Navigation Header */}
        <div 
          className='flex items-center justify-between p-4 rounded-lg border'
          style={{ 
            backgroundColor: '#2A2438',
            borderColor: '#3F3C5B'
          }}
        >
          <Link href={`/topics/${slug}`} className='group'>
            <Button 
              variant={'link'} 
              className='p-0 h-auto font-medium transition-all duration-200 group-hover:scale-105'
              style={{ 
                color: '#8B5CF6',
                textDecoration: 'none'
              }}
            >
              <ChevronLeft className='w-4 h-4 mr-1 transition-transform duration-200 group-hover:-translate-x-1' />
              Back to {slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' ')}
            </Button>
          </Link>
          
          {/* Breadcrumb */}
          <nav className='flex items-center gap-2 text-sm'>
            <Link 
              href='/topics'
              className='transition-colors duration-200 hover:underline'
              style={{ color: '#A78BFA' }}
            >
              Topics
            </Link>
            <svg className='w-3 h-3' fill='#3F3C5B' viewBox='0 0 20 20'>
              <path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd' />
            </svg>
            <Link 
              href={`/topics/${slug}`}
              className='transition-colors duration-200 hover:underline'
              style={{ color: '#A78BFA' }}
            >
              {slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' ')}
            </Link>
            <svg className='w-3 h-3' fill='#3F3C5B' viewBox='0 0 20 20'>
              <path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd' />
            </svg>
            <span style={{ color: '#EDE9FE' }}>Post</span>
          </nav>
        </div>

        {/* Main Content */}
        <main className='space-y-8'>
          {/* Post Content */}
          <section>
            <PostShow postId={postId} />
          </section>

          {/* Comment Creation */}
          <section 
            className='rounded-lg p-6 border'
            style={{ 
              backgroundColor: '#2A2438',
              borderColor: '#3F3C5B'
            }}
          >
            <div className='flex items-center gap-3 mb-4'>
              <div 
                className='w-8 h-8 rounded-full flex items-center justify-center'
                style={{ backgroundColor: '#8B5CF6' }}
              >
                <svg className='w-4 h-4' fill='#EDE9FE' viewBox='0 0 20 20'>
                  <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' />
                </svg>
              </div>
              <div>
                <h2 
                  className='font-semibold text-lg'
                  style={{ color: '#EDE9FE' }}
                >
                  Join the Discussion
                </h2>
                <p 
                  className='text-sm'
                  style={{ color: '#A78BFA' }}
                >
                  Share your thoughts and engage with the community
                </p>
              </div>
            </div>
            
            <div 
              className='h-px w-full mb-4'
              style={{ backgroundColor: '#3F3C5B' }}
            />
            
            <CommentCreateForm postId={postId} startOpen />
          </section>

          {/* Comments Section */}
          <section>
            <CommentList postId={postId} />
          </section>
        </main>

        {/* Floating Action Button */}
        <div className='fixed bottom-6 right-6 z-50'>
          <button 
            className='w-12 h-12 rounded-full shadow-lg transition-all duration-200 hover:scale-110'
            style={{ 
              backgroundColor: '#8B5CF6',
              boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)'
            }}
            title='Scroll to top'
          >
            <svg className='w-6 h-6 mx-auto' fill='#EDE9FE' viewBox='0 0 20 20'>
              <path fillRule='evenodd' d='M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z' clipRule='evenodd' />
            </svg>
          </button>
        </div>

        {/* Progress Indicator */}
        <div 
          className='fixed top-0 left-0 h-1 z-50 transition-all duration-300'
          style={{ 
            backgroundColor: '#8B5CF6',
            width: '0%'
          }}
          id='progress-bar'
        />
      </div>
    </div>
  )
}

export default PostShowPage