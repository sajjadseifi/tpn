import React, { FC } from 'react'
import { RootState } from '@src/store'
import { WizardState } from '@src/store/reducers/wizard-redcuer'
import { useDispatch, useSelector } from 'react-redux'
import { classes, nextBtn, prevBtn, submitedBtn } from '.'
import { IconButton } from '@src/components/ui'
import { wizardActions } from '@src/store/actions'
import { Partial } from '@src/types/types'

interface MovmentProps {
  submitForm: (() => Promise<void>) & (() => Promise<any>)
  isSubmitting?: boolean
}

export const Movment: FC<Partial<MovmentProps>> = ({ submitForm, isSubmitting: loading }) => {
  const dispatch = useDispatch()
  const { level, wizards } = useSelector<RootState>((state) => state.wizard) as WizardState
  const isStart = 0 === level
  const isEnd = wizards.length - 1 == level

  const onPrev = () => dispatch(wizardActions.prevWizard())
  return (
    <div className={classes.Movment}>
      {isStart ? <div></div> : <IconButton onClick={onPrev} {...prevBtn} />}
      <IconButton loading={loading} onClick={submitForm} {...(isEnd ? submitedBtn : nextBtn)} />
    </div>
  )
}
