import { Post } from '@/posts/Post'

export default function App() {
  return (
    <div className="mx-auto mt-8 space-y-4 max-w-md">
      <Post author="Jason" text="React.js is awesome"/>
      <Post author="Bruce" text="Check out the full course"/>
    </div>
  )
}
