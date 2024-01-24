import React from 'react'

export type NewPost = {
  text: string
  author: string
}

type AddPostProps = {
  onCancel: () => void
  onAddPost: (post: NewPost) => void
}

export function AddPost({ onCancel, onAddPost }: AddPostProps) {
  const [text, setText] = React.useState('')
  const [author, setAuthor] = React.useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const post = { text, author }

    addPostToServer(post)

    onAddPost(post)

    onCancel()
  }

  function addPostToServer(post: NewPost) {
    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      body: JSON.stringify({
        ...post,
        userId: Date.now()
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="text" className="w-24 font-semibold">Text</label>
        <textarea
          onChange={e => setText(e.target.value)}
          required
          id="text"
          rows={5}
          className="flex-grow px-2 py-1 bg-slate-600 rounded focus:outline-none focus:ring-1 focus:ring-amber-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="author" className="w-24 font-semibold">Your name</label>
        <input
          onChange={e => setAuthor(e.target.value)}
          required
          type="text"
          id="author"
          className="flex-grow px-2 py-1 bg-slate-600 rounded focus:outline-none focus:ring-1 focus:ring-amber-500"
        />
      </div>

      <div className="flex gap-2 justify-end">
        <button
          onClick={onCancel}
          type="button"
          className="px-2 py-1 border border-slate-500 rounded hover:bg-slate-50 hover:text-slate-950 focus:outline-none focus:ring-1 focus:ring-amber-500"
        >
          Cancel
        </button>
        <button
          className="px-2 py-1 border border-amber-500 rounded hover:bg-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
