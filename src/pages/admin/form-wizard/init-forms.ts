import { IWizard } from '@src/store/reducers/wizard-redcuer'
import { AcceptorForm } from './sections'
import { IdenfiyForm } from './sections'
import { PersonalForm } from './sections'

export const forms: IWizard[] = [
  {
    title: 'اطلاعات شخصی',
    form: {
      firsname: '',
      lastname: '',
      city: '',
      sex: -1
    },
    render: PersonalForm
  },
  {
    title: 'اطلاعات هویتی',
    form: {
      email: '',
      phone: '',
      nationalCode: ''
    },
    render: IdenfiyForm
  },
  {
    title: 'تایید هویت',
    form: {
      code: ''
    },
    render: AcceptorForm
  }
]
