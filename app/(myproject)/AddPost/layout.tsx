import React, { ReactNode } from 'react'
import Sidebar from "../../_mainlayout/_usersidebar/page"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="container">
      <div className='md:grid md:grid-cols-3 gap-4'>
        <div className="col-span-1 bg-amber-500">
          <Sidebar />
        </div>
        <div className="col-span-2 bg-white my-4 rounded-md shadow-sm p-5">
          {children}
        </div>
      </div>
    </div>
  )
}
