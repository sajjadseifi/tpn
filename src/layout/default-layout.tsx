import React, { FC } from 'react'

interface DefaultLayoutProps {
  children: React.ReactNode
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div>
      <div>Default Layout</div>
      <div>{children}</div>
    </div>
  )
}
