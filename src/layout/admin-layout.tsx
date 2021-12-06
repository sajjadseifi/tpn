import React, { FC, ReactPropTypes } from 'react'

interface AdminLayoutProps {
  children: React.ReactNode
}

export const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div>
      <div>Admin Layout</div>
      <div>{children}</div>
    </div>
  )
}
