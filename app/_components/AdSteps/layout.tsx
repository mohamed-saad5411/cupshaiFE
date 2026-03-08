import React, { ReactNode } from 'react';
import Sidebar from '../../_mainlayout/_usersidebar/page';
// Link مستورد لكن مش مستعمل، فحذفته لتجنب warning

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="container">
      <div className="grid grid-cols-3">
        <div className="col-span-1 bg-amber-500">
          <Sidebar />
        </div>
        <div className="col-span-2 bg-amber-700">
          {children}
        </div>
      </div>
    </div>
  );
}
