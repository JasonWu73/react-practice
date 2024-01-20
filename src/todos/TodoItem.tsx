import type { Todo } from './todos-signals.ts'

type TodoItemProps = {
  item: Todo
  onClick: (id: number) => void
}

export function TodoItem({ item, onClick }: TodoItemProps) {
  return (
    <li
      onClick={() => onClick(item.id)}
      title="Click to remove"
      className="px-1 py-2 border border-amber-500 rounded shadow-md bg-amber-200 cursor-pointer"
    >
      {item.text}
    </li>
  )
}
