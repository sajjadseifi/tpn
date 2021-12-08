import React from 'react'
import * as Yup from 'yup'

export const acceprorSchema = Yup.object().shape({
  code: Yup.string()
    .max(6, 'حد اکثر اندازه کد میبایست 6 باشد.')
    .min(6, 'حد اقل اندازه کد میبایست 6 باشد')
    .required('این ورودی اجباری میباشد.')
})

export const AcceptorForm = () => {
  return <>AcceptorForm</>
}
