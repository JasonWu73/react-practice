import { effect, signal } from '@preact/signals-react'

import type { Todo } from './AddTodo.tsx'

const todos = signal(undefined as unknown as Todo[])

export function createTodoState() {
  if (todos.value !== undefined) return

  todos.value =[]

  effect(() => {
    console.log('todos changed', todos.value)
  })
}

export function getTodos() {
  return todos.value
}

export function addTodo(todo: Todo) {
  todos.value = [...todos.value, todo]
}

export function removeTodo(id: number) {
  todos.value = todos.value.filter(todo => todo.id !== id)
}
