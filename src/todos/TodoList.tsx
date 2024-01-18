import React from 'react'

import { AddTodo, type Todo } from './AddTodo.tsx'
import { TodoItem } from './TodoItem.tsx'

export function TodoList() {
  const [todos, setTodos] = React.useState<Todo[]>([])

  function handleRemove(id: number) {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <div className="mx-auto mt-8 max-w-md">
      <h1 className="text-lg font-semibold mb-4">Todo text</h1>

      <AddTodo onAdd={todo => setTodos(prev => ([...prev, todo]))}/>

      <ul className="mt-4 space-y-2">
        {todos.map(todo => (
          <TodoItem key={todo.id} item={todo} onClick={handleRemove}/>
        ))}
      </ul>
    </div>
  )
}
