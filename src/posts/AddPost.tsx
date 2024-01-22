type AddPostProps = {
  onChangeText: (text: string) => void
  onChangeAuthor: (author: string) => void
  onCancel: () => void
}

export function AddPost({ onChangeText, onChangeAuthor, onCancel }: AddPostProps) {
  return (
    <form
      onSubmit={e => e.preventDefault()}
      className="space-y-4"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="text" className="w-24 font-semibold">Text</label>
        <textarea
          onChange={e => onChangeText(e.target.value)}
          id="text"
          rows={5}
          className="flex-grow px-2 py-1 bg-slate-600 rounded focus:outline-none focus:ring-1 focus:ring-amber-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="author" className="w-24 font-semibold">Your name</label>
        <input
          onChange={e => onChangeAuthor(e.target.value)}
          type="text"
          id="author"
          className="flex-grow px-2 py-1 bg-slate-600 rounded focus:outline-none focus:ring-1 focus:ring-amber-500"
        />
      </div>

      <div className="flex gap-2 justify-end">
        <button
          onClick={onCancel}
          type="button"
          className="px-2 py-1 border border-slate-500 rounded hover:bg-slate-50 hover:text-slate-950 focus:outline-none focus:ring-1 focus:ring-amber-500"
        >
          Cancel
        </button>
        <button
          className="px-2 py-1 border border-amber-500 rounded hover:bg-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
