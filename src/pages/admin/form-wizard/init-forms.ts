import { IWizard } from '@src/components/form-wizard'
import { sleep } from '@src/utils/utils'
import { AcceptorForm } from './sections'
import { IdenfiyForm } from './sections'
import { PersonalForm } from './sections'
import { acceprorSchema } from './sections/acceptor-form'
import { idenfiySchema } from './sections/idenfiy-form'
import { personalSchema } from './sections/pesonal-form'

export const forms: IWizard[] = [
  {
    title: 'اطلاعات شخصی',
    form: {
      firstname: '',
      lastname: '',
      city: '',
      sex: -1
    },
    validationSchema: personalSchema,
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
    validationSchema: idenfiySchema,
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
    validationSchema: acceprorSchema,
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
