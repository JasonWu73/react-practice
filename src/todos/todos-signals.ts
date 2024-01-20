import { effect, signal } from '@preact/signals-react'

/**
 * Todo 数据类型。
 */
export type Todo = {
  id: number
  text: string
}

const todos = signal(undefined as unknown as Todo[])

/**
 * 创建 Todo List 相关的数据 signal。
 */
export function createTodoState() {
  if (todos.value !== undefined) return

  todos.value =[]

  effect(() => {
    // console.log('todos changed', todos.value)
  })
}

/**
 * 获取 Todo List 数据。
 *
 * @returns {Todo[]} Todo List 数据
 */
export function getTodos(): Todo[] {
  return todos.value
}

/**
 * 添加 Todo。
 *
 * @param text Todo 数据
 */
export function addTodo(text: string) {
  todos.value = [...todos.value, {id: Date.now(), text}]
}

/**
 * 删除 Todo。
 *
 * @param id Todo ID
 */
export function removeTodo(id: number) {
  todos.value = todos.value.filter(todo => todo.id !== id)
}
