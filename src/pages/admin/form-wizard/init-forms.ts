import { IWizard } from '@src/store/reducers/wizard-redcuer'
import { sleep } from '@src/utils/utils'
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
    render: PersonalForm,
    onSubmit: (values, dispatch) => {
      console.log('start')
      sleep(1) //fetch data
      console.log('end')

      const ok = Math.floor(Math.random() * 2) == 1

      const messages = ok
        ? ['اطلاعات شخصی شما مورد تایید قرار گرفت']
        : ['در اطلاعات شخصی شما موردی وجود دارد لطفا آن را بررسی کنید']

      return { ok, messages }
    }
  },
  {
    title: 'اطلاعات هویتی',
    form: {
      email: '',
      phone: '',
      nationalCode: ''
    },
    render: IdenfiyForm,
    onSubmit: (values, dispatch) => {
      console.log('start')
      sleep(3) //fetch data
      console.log('end')

      const ok = Math.floor(Math.random() * 2) == 1

      const messages = ok ? ['ایمیل یا پیامک برای شما ارسال شد'] : ['لطفا ایمیل و شماره تلفن را درست وارد کیند']

      return { ok, messages }
    }
  },
  {
    title: 'تایید هویت',
    form: {
      code: ''
    },
    render: AcceptorForm,
    onSubmit: (values, dispatch) => {
      console.log('start')
      sleep(0.5) //fetch data
      console.log('end')

      const ok = Math.floor(Math.random() * 2) == 1

      const messages = ok ? ['ممنون از به تایید رساندن حسابتان'] : ['کد وارد شده صحیح نمیباشد']
      return { ok, messages }
    }
  }
]
