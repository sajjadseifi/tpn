import React from 'react'
import * as Yup from 'yup'
import { regexs } from '@src/constants'
import { InputFormikWizard } from '@src/components/ui/formik-wizard'
import { HintUi } from '@src/components/ui'

export const idenfiySchema = Yup.object().shape({
  email: Yup.string()
    .min(8, 'حد اقل 8 حرف وارد کنید.')
    .email()
    .required('این ورودی اجباری میباشد.'),
  phone: Yup.string()
    .matches(regexs.PHONE, 'فریمت شماره وارد شده نادرست میباشد.')
    .required('این ورودی اجباری میباشد.'),
  nationalCode: Yup.string()
    .min(10, 'کد ملی 10 رقمی میباشد.')
    .max(10, 'کد ملی 10 رقمی میباشد.')
    .matches(regexs.NATIONAL_CODE, 'فرمت کد ملی وارد شده صحیح نمیباشد.')
    .required('این ورودی اجباری میباشد.')
})

export const IdenfiyForm = () => {
  return (
    <>
      <HintUi
        hints={[
          'درخواست به صورت فیک میباشد و 2 ثانیه زمان میبرد',
          'به صورت رندم این بخش تایید یا رد خواهد شد ، درصورت رد شدن مجدد امتحان کنید ',
          'درصورت موفقیت یک کد 6 رقمی در مدال مشاهده خواهید کرد از آن باید در مرحله بعد استفاد کنید',
          'فرم دارای اعتبار سنجی میباشد لطفا کامل کنید'
        ]}
      />
      <InputFormikWizard label="ایمیل" name="email" />
      <InputFormikWizard label="شماره همراه" name="phone" />
      <InputFormikWizard label="کد ملی" name="nationalCode" />
    </>
  )
}
