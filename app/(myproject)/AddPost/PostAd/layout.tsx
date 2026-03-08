'use client'
import React, { ReactNode } from 'react'
import StepsNavBar from '@/app/_mainlayout/_navsteps/page'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="">
      <StepsNavBar />
      {children}
    </div>
  )
}
