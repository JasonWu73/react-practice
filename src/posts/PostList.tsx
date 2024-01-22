import React from 'react'

import { Model } from '@/shared/components/ui/Model'
import { Post } from '@/posts/Post'
import { AddPost, type NewPost } from '@/posts/AddPost'

type PostListProps = {
  openAddPostModel: boolean
  onCloseAddPostModel: () => void
}

export function PostList({ openAddPostModel, onCloseAddPostModel }: PostListProps) {
  const [posts, setPosts] = React.useState<NewPost[]>([])

  function handleAddPost(post: NewPost) {
    setPosts(prev => [post, ...prev])
  }

  return (
    <>
      <Model open={openAddPostModel} onCloseModel={onCloseAddPostModel}>
        <AddPost
          onCancel={onCloseAddPostModel}
          onAddPost={handleAddPost}
        />
      </Model>

      <ul className="flex justify-center gap-4 flex-wrap mt-8">
        {posts.length > 0 && posts.map((post, index) => (
          <Post
            key={index}
            author={post.author}
            text={post.text}
          />
        ))}

        {posts.length === 0 && (
          <div>
            <h2>There are no posts yet.</h2>
            <p>Start adding some!</p>
          </div>
        )}
      </ul>
    </>
  )
}
