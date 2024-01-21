type PostProps = {
  author: string
  text: string
}

export function Post({author, text}: PostProps) {
  return (
    <li className="p-4 space-y-2 bg-slate-600 border border-slate-900 rounded-md">
      <p className="uppercase font-semibold">{author}</p>
      <p className="italic text-xl font-light">{text}</p>
    </li>
  )
}
