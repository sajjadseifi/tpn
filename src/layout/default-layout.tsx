import React, { FC } from 'react'

interface DefaultLayoutProps {
  children: React.ReactNode
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return <div>{children}</div>
}
