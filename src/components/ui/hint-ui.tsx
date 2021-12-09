import React, { FC } from 'react'
import { AiTwotoneStar } from 'react-icons/ai'

interface HintUiProps {
  hints: any[]
}

export const HintUi: FC<HintUiProps> = ({ hints }) => {
  return (
    <ul className="hint-container">
      {hints.map((h, k) => (
        <li className="hint-item" key={k}>
          <div className="hint-star">
            <AiTwotoneStar />
          </div>
          <span className="hint-txt">{h}</span>
        </li>
      ))}
    </ul>
  )
}
