import React from 'react'

export function AddPost() {

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 p-4 space-y-4 max-w-md border border-amber-500 rounded shadow shadow-amber-500"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="text" className="w-24 font-semibold">Text</label>
        <textarea
          id="text"
          rows={5}
          className="flex-grow px-2 py-1 bg-slate-600 rounded focus:outline-none focus:ring-1 focus:ring-amber-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="author" className="w-24 font-semibold">Your name</label>
        <input
          type="text"
          id="author"
          className="flex-grow px-2 py-1 bg-slate-600 rounded focus:outline-none focus:ring-1 focus:ring-amber-500"
        />
      </div>
    </form>
  )
}
