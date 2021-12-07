import React from 'react'
import { RootState } from '@src/store'
import { WizardState } from '@src/store/reducers/wizard-redcuer'
import { IoAdd, IoBag, IoCafe } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { IconButton } from '../ui'
import classes from './form-wizard.module.css'
import { GREEN, RED, CORNFLOWER_BLUE, BLUE } from '@src/constants/colors'

export const MovmentFormWizard = () => {
  const { level, wizards, isLoading } = useSelector<RootState>((state) => state.wizard) as WizardState
  const isStart = -1 === level
  const isEnd = wizards.length - 1 == level
  console.log({ isEnd, isStart })
  return (
    <div className={classes.Movment}>
      {!isStart && <IconButton color={RED} icon={IoAdd} title="قبلی" />}
      {!isEnd && <IconButton color={BLUE} icon={IoBag} title="بعدی" />}
      {isEnd && <IconButton color={GREEN} icon={IoCafe} title="پایان" />}
    </div>
  )
}
