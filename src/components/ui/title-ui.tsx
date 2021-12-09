import React, { FC, ReactNode } from 'react'

interface TitleProps {
  subject: string
  className?: string
}

export const TitleUi: FC<TitleProps> = ({ subject, ...props }) => (
  <h3 {...props} className={[props.className!, 'title-ui'].join(' ')}>
    {subject}
  </h3>
)

TitleUi.defaultProps = {
  subject: ''
}
