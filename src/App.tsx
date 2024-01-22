import React from 'react'

import { Header } from '@/shared/components/layout/Header'
import { PostList } from '@/posts/PostList'

export default function App() {
  const [openAddPostModel, setOpenAddPostModel] = React.useState(false)

  return (
    <>
      <Header onAddPost={() => setOpenAddPostModel(true)}/>
      <PostList openAddPostModel={openAddPostModel} onCloseAddPostModel={() => setOpenAddPostModel(false)} />
    </>
  )
}
