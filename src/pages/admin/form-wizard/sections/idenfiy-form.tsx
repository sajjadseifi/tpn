import React from 'react'
import * as Yup from 'yup'
import { regexs } from '@src/constants'

export const idenfiySchema = Yup.object().shape({
  email: Yup.string().email().required('این ورودی اجباری میباشد.'),
  phone: Yup.string().matches(regexs.PHOEN, 'فریمت شماره وارد شده نادرست میباشد.').required('این ورودی اجباری میباشد.'),
  nationalCode: Yup.string().required('این ورودی اجباری میباشد.')
})

export const IdenfiyForm = () => {
  return <>IdenfiyForm</>
}
