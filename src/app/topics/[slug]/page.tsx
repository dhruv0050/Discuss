import PostList from '@/components/posts/post-list'
import PostCreateForm from '@/components/posts/PostCreateForm'
import { Button } from '@/components/ui/button'
import React from 'react'

type TopicShowPageProps = {
  params:Promise<{slug: string}>
}

const TopicShowPage : React.FC<TopicShowPageProps> = async ({params}) => {
  const slug = (await params).slug
  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
      <div className='col-span-3'>
        <h1>{slug}</h1>
        <PostList/>
      </div>
      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  )
}

export default TopicShowPage
