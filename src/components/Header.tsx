import React from 'react'

export default function Header({ title }: { title: string }) {
  return (
    <div className="text-green-600 font-bold text-2xl">
      {title}
    </div>
  )
}