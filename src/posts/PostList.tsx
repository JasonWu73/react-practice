import { Post } from '@/posts/Post'
import { AddPost } from '@/posts/AddPost'

export function PostList() {
  return (
    <>
      <AddPost/>

      <ul className="flex justify-center gap-4 flex-wrap mt-8">
        <Post author="Jason" text="React.js is awesome"/>
        <Post author="Bruce" text="Check out the full course"/>
      </ul>
    </>
  )
}
