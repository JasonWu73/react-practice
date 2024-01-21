import React from 'react'

type ModelProps = {
  children: React.ReactNode
  open: boolean
  setOpen: (open: boolean) => void
}

export function Model({ children, open, setOpen }: ModelProps) {
  if (!open) return null

  return (
    <>
      <div onClick={() => setOpen(false)} className="absolute inset-0 bg-slate-800/80"/>
      <dialog
        open
        className="p-4 w-8/12 border border-amber-500 rounded shadow bg-slate-700 text-slate-50"
      >{children}</dialog>
    </>
  )
}
