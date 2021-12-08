import React from 'react'
import { RootState } from '@src/store'
import { WizardState } from '@src/store/reducers/wizard-redcuer'
import { useDispatch, useSelector } from 'react-redux'
import { classes, nextBtn, prevBtn, submitedBtn } from '.'
import { IconButton } from '@src/components/ui'
import { wizardActions } from '@src/store/actions'

export const Movment = () => {
  const dispatch = useDispatch()
  const { level, wizards, isLoading } = useSelector<RootState>((state) => state.wizard) as WizardState
  const isStart = 0 === level
  const isEnd = wizards.length - 1 == level

  const onNext = () => dispatch(wizardActions.nextWizard())
  const onPrev = () => dispatch(wizardActions.prevWizard())
  const onSubmit = () => dispatch(wizardActions.submitedWizard())
  return (
    <div className={classes.Movment}>
      {isStart && <div></div>}
      {!isStart && <IconButton onClick={onPrev} {...prevBtn} />}
      {!isEnd && <IconButton onClick={onNext} {...nextBtn} />}
      {isEnd && <IconButton onClick={onSubmit} {...submitedBtn} />}
    </div>
  )
}
