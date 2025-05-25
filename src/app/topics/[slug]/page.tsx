import PostList from '@/components/posts/post-list'
import PostCreateForm from '@/components/posts/PostCreateForm'
import { fetchPostByTopicSlug } from '@/lib/query/post'
import React from 'react'

type TopicShowPageProps = {
  params: Promise<{slug: string}>
}

const TopicShowPage: React.FC<TopicShowPageProps> = async ({params}) => {
  const slug = (await params).slug
  
  return (
    <div 
      className='min-h-screen p-4'
      style={{ backgroundColor: '#1E1B2E' }}
    >
      <div className='grid grid-cols-4 gap-4'>
        <div className='col-span-3'>
          <div 
            className='rounded-lg p-6 mb-4'
            style={{ backgroundColor: '#2A2438' }}
          >
            <h1 
              className='font-bold text-2xl mb-2 capitalize'
              style={{ color: '#EDE9FE' }}
            >
              {slug.replace('-', ' ')}
            </h1>
            <div 
              className='h-px w-full mb-4'
              style={{ backgroundColor: '#3F3C5B' }}
            />
          </div>
          
          <div 
            className='rounded-lg'
            style={{ backgroundColor: '#2A2438', border: '1px solid #3F3C5B' }}
          >
            <PostList fetchData={() => fetchPostByTopicSlug(slug)} />
          </div>
        </div>
        
        <div>
          <div 
            className='rounded-lg p-4 sticky top-4'
            style={{ 
              backgroundColor: '#2A2438', 
              border: '1px solid #3F3C5B',
              boxShadow: '0 4px 6px -1px rgba(139, 92, 246, 0.1)'
            }}
          >
            <h2 
              className='font-semibold text-lg mb-4'
              style={{ color: '#EDE9FE' }}
            >
              Create New Post
            </h2>
            <PostCreateForm slug={slug} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopicShowPage