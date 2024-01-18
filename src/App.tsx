import { useSignals } from '@preact/signals-react/runtime'

import { TodoList } from './todos/TodoList.tsx'
import { createTodoState } from './todos/todos-signals.ts'

createTodoState()

export default function App() {
  useSignals()

  return (
    <TodoList/>
  )
}
