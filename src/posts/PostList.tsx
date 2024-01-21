import React from 'react'

import { Post } from '@/posts/Post'
import { AddPost } from '@/posts/AddPost'

export function PostList() {
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
      <AddPost onChangeText={handleChangeText} onChangeAuthor={handleChangeAuthor}/>

      <ul className="flex justify-center gap-4 flex-wrap mt-8">
        <Post author={author} text={text}/>
        <Post author="Bruce" text="Check out the full course"/>
      </ul>
    </>
  )
}
