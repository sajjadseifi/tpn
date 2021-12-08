import React, { FC } from 'react'
import { RootState } from '@src/store'
import { WizardState } from '@src/store/reducers/wizard-redcuer'
import { useSelector } from 'react-redux'
import { ProggresItemProps, ProggresLists } from '.'
import classes from './progress.module.css'
export interface ProggresProps {
  clickedProggresItem?: (index: number) => void
}

export const Proggres: FC<ProggresProps> = ({ clickedProggresItem: clickedPI }) => {
  const { wizards, visitedLevel: vlvl } = useSelector<RootState>((state) => state.wizard) as WizardState
  const levelSize = wizards.length

  const width = levelSize === 0 ? 0 : levelSize === 1 ? vlvl * 100 : (vlvl * 100) / (levelSize - 1)

  const progItms: ProggresItemProps[] = [...Array(levelSize)].map((_, index) => ({
    isCurrent: index === vlvl,
    isEntered: index <= vlvl,
    clicked: () => clickedPI && clickedPI(index)
  }))

  return (
    <div className={classes.Progress}>
      <div className={`${classes.ProgressLinear} ${classes.ProgressLinearBack}`}></div>
      <div style={{ width: width + '%' }} className={classes.ProgressLinear}></div>
      <ProggresLists items={progItms} />
    </div>
  )
}
