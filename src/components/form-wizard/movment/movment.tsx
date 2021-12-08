import React from 'react'
import { RootState } from '@src/store'
import { WizardState } from '@src/store/reducers/wizard-redcuer'
import { BsCheck, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { classes } from '.'
import { GREEN, RED, BLUE } from '@src/constants/colors'
import { IconButton } from '@src/components/ui'

const iconProps = { size: 20 }

export const Movment = () => {
  const { level, wizards, isLoading } = useSelector<RootState>((state) => state.wizard) as WizardState
  const isStart = 0 === level
  const isEnd = wizards.length - 1 == level

  return (
    <div className={classes.Movment}>
      {isStart && <div></div>}
      {!isStart && <IconButton color={RED} icon={BsArrowRightShort} {...{ iconProps }} title="قبلی" />}
      {!isEnd && <IconButton revers color={BLUE} {...{ iconProps }} icon={BsArrowLeftShort} title="بعدی" />}
      {isEnd && <IconButton color={GREEN} {...{ iconProps }} icon={BsCheck} title="پایان" />}
    </div>
  )
}
