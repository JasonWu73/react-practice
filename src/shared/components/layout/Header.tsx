type HeaderProps = {
  onAddPost: () => void
}

export function Header({ onAddPost }: HeaderProps) {
  return (
    <header className="flex justify-between mx-auto mt-8 w-10/12 border-b-2 border-amber-500">
      <h1 className="pb-4 text-2xl font-bold">React Poster</h1>
      <div>
        <button
          onClick={onAddPost}
          className="px-2 py-1 border border-amber-500 rounded bg-slate-600 font-bold hover:bg-slate-700 focus:outline-none focus:ring-1 focus:ring-amber-400"
        >Add
          Post
        </button>
      </div>
    </header>
  )
}
