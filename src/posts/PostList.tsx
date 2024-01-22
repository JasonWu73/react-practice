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
  const [loading, setLoading] = React.useState<boolean>(false)

  React.useEffect(() => {
    (async () => {
      setLoading(true)

      const response = await fetch('https://dummyjson.com/posts?delay=1000')
      const data = await response.json()

      const myNeededPost = data['posts'].map((post: { body: string; title: string }) => {
        return {
          text: post.body,
          author: post.title
        }
      })
      setPosts(myNeededPost)

      setLoading(false)
    })()
  }, [])

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
        {!loading && posts.length > 0 && posts.map((post, index) => (
          <Post
            key={index}
            author={post.author}
            text={post.text}
          />
        ))}

        {!loading && posts.length === 0 && (
          <li className="space-y-2 text-center">
            <h2 className="text-2xl font-bold">There are no posts yet.</h2>
            <p className="italic">Start adding some!</p>
          </li>
        )}

        {loading && (
          <li className="text-center">
            <h2 className="text-2xl font-bold">Loading...</h2>
          </li>
        )}
      </ul>
    </>
  )
}
