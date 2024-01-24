import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '@/shared/components/layout/RootLayout'
import PostListPage from '@/posts/PostListPage'
import { AddPost } from '@/posts/AddPost'

export const routes = createBrowserRouter([
  {
    element: <RootLayout/>,
    children: [
      { path: '/', element: <PostListPage/> },
      { path: '/posts/add', element: <AddPost/> }
    ]
  }
])
