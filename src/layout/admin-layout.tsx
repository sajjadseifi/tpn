import { NavigationAdmin } from '@src/components/navigation'
import { SidebarAdmin } from '@src/components/sidebar'
import React, { FC, ReactPropTypes, useEffect, useState } from 'react'

interface AdminLayoutProps {
  children: React.ReactNode
}

export const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout-content">
        <nav className="layout-nav">
          <NavigationAdmin />
        </nav>
        <section className="layout-section">{children}</section>
      </div>

      <div className={'layout-sidebar railroad'}>
        <SidebarAdmin />
      </div>
    </div>
  )
}
