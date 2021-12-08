import { InputFormikWizard } from '@src/components/ui/formik-wizard'
import React from 'react'
import * as Yup from 'yup'

const withMinMaxReq = () =>
  Yup.string()
    .min(2, 'حد اقل عبارت وارد شده 2 کلمه میباشد')
    .max(20, 'حد اکثر عبارت وارد شده 2 کلمه میباشد')
    .required('این ورودی اجباری میباشد.')
export const personalSchema = Yup.object().shape({
  firstname: withMinMaxReq(),
  lastname: withMinMaxReq(),
  city: withMinMaxReq(),
  sex: Yup.number().min(0, '').max(1, '')
})

export const PersonalForm = () => {
  return (
    <>
      <InputFormikWizard label="نام" name="firstname" />
      <InputFormikWizard label="نام خانوادگی" name="lastname" />
      <InputFormikWizard label="شهر" name="city" />
    </>
  )
}
