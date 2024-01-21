import React from 'react'

import { Model } from '@/shared/components/ui/Model'
import { Post } from '@/posts/Post'
import { AddPost } from '@/posts/AddPost'

export function PostList() {
  const [open, setOpen] = React.useState(true)
  const [text, setText] = React.useState('')
  const [author, setAuthor] = React.useState('')

  function handleChangeText(text: string) {
    setText(text)
  }

  function handleChangeAuthor(author: string) {
    setAuthor(author)
  }

  return (
    <>
      <Model open={open} setOpen={setOpen}>
        <AddPost onChangeText={handleChangeText} onChangeAuthor={handleChangeAuthor}/>
      </Model>

      <ul className="flex justify-center gap-4 flex-wrap mt-8">
        <Post author={author} text={text}/>
        <Post author="Bruce" text="Check out the full course"/>
      </ul>
    </>
  )
}
