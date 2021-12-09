import React from 'react'
import {
  InputFormikWizard,
  SwitchFormikWizard,
  SwitchItem
} from '@src/components/ui/formik-wizard'
import * as Yup from 'yup'
import { HintUi } from '@src/components/ui'

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
const sexSwitchs: SwitchItem<any>[] = [
  { display: 'مرد', value: '0' },
  { display: 'زن', value: '1' }
]

export const PersonalForm = () => {
  return (
    <>
      <HintUi
        hints={[
          'درخواست به صورت فیک میباشد و1 ثانیه زمان میبرد',
          'فرم دارای اعتبار سنجی میباشد لطفا کامل کنید',
          'به صورت رندم این بخش تایید یا رد خواهد شد ، درصورت رد شدن مجدد امتحان کنید '
        ]}
      />
      <InputFormikWizard label="نام" name="firstname" />
      <InputFormikWizard label="نام خانوادگی" name="lastname" />
      <InputFormikWizard label="شهر" name="city" />
      <SwitchFormikWizard label="جنسیت" name="sex" items={sexSwitchs} />
    </>
  )
}
