import React, { ReactNode } from 'react'
import Link from 'next/link'
import MsgSideBar from '../../../_mainlayout/_msgSideBar/page'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex md:p-4">
      <div className="md:grid md:grid-cols-3 w-full bg-white md:shadow-md">
        <div className='col-span-1'>
          <MsgSideBar />
        </div>
        <div className='col-span-2'>
          {children}
        </div>
      </div>
    </div>
  )
}
