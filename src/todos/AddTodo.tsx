import React from 'react'

export type Todo = {
  id: number
  text: string
}

type AddTodoProps = {
  onAdd: (todo: Todo) => void
}

export function AddTodo({ onAdd }: AddTodoProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    const text = inputRef.current!.value.trim()

    if (!text) return

    inputRef.current!.value = ''

    onAdd({ id: Date.now(), text })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        ref={inputRef}
        placeholder="Add a new todo"
        className="px-2 py-1 border-b rounded bg-slate-50 focus:outline-none focus:border-b-2 focus:border-amber-500"
      />

      <button
        className="px-2 py-1 max-w-fit border-2 border-sky-500 rounded hover:text-slate-50 hover:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-400 focus:border-sky-500"
      >
        Add Todo
      </button>
    </form>
  )
}
