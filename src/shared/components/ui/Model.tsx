import React from 'react'

type ModelProps = {
  children: React.ReactNode
}

export function Model({children}: ModelProps) {
  return (
    <>
      <div className="absolute inset-0 bg-slate-800/80"></div>
      <dialog
        open
        className="p-4 w-8/12 border border-amber-500 rounded shadow bg-slate-700 text-slate-50"
      >{children}</dialog>
    </>
  )
}
