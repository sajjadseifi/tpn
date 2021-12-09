import React, { FC } from 'react'
import { AdminNavigation } from '@src/components/navigation'
import { SidebarAdmin } from '@src/components/sidebar'
import { useSelector } from 'react-redux'
import { RootState } from '@src/store'
import { ISideBarState } from '@src/store/reducers/sidebar-reducer'

interface AdminLayoutProps {
  children: React.ReactNode
}

export const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
  const { expanded, ghost } = useSelector<RootState>((state) => state.sidebar) as ISideBarState
  let classes = ['layout-sidebar']
  if (ghost) classes.push('railroad')

  classes.push(expanded ? 'open' : 'close')
  return (
    <div className="layout">
      <div className="layout-content">
        <nav className="layout-nav">
          <AdminNavigation />
        </nav>
        <section className="layout-section">{children}</section>
      </div>

      <div className={classes.join(' ')}>
        <SidebarAdmin />
      </div>
    </div>
  )
}
