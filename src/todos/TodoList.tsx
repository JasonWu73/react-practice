import { AddTodo } from './AddTodo.tsx'
import { TodoItem } from './TodoItem.tsx'
import { addTodo, getTodos, removeTodo } from './todos-signals.ts'

export function TodoList() {
  const todos = getTodos()

  return (
    <div className="mx-auto mt-8 max-w-md">
      <h1 className="text-lg font-semibold mb-4">Todo text</h1>

      <AddTodo onAdd={addTodo}/>

      <ul className="mt-4 space-y-2">
        {todos.map(todo => (
          <TodoItem key={todo.id} item={todo} onClick={removeTodo}/>
        ))}
      </ul>
    </div>
  )
}
