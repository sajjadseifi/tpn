import React from 'react'
import { ValidationSchemaFunc } from '@src/components/form-wizard'
import { InputFormikWizard } from '@src/components/ui/formik-wizard'
import * as Yup from 'yup'

export const acceprorSchema: ValidationSchemaFunc = (states) =>
  Yup.object().shape({
    code: Yup.string()
      .max(6, 'حد اکثر اندازه کد میبایست 6 باشد.')
      .min(6, 'حد اقل اندازه کد میبایست 6 باشد')
      // .test('eq input code with server code', 'کد وارد شده با کد مورد نظر همخوانی ندارد', (value: any) => {
      //   const { code } = states.wizard
      //   console.log(`${value} === ${code}`, value === code)
      //   return value === code
      // })
      .required('این ورودی اجباری میباشد.')
  })

export const AcceptorForm = () => {
  return (
    <>
      <InputFormikWizard label="کد 6 رقی" name="code" />
    </>
  )
}
