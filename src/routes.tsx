import { createBrowserRouter } from 'react-router-dom'

import PostListPage from '@/posts/PostListPage'
import { AddPost } from '@/posts/AddPost'

export const routes = createBrowserRouter([
  { path: '/', element: <PostListPage/> },
  { path: '/posts/add', element: <AddPost/> }
])
