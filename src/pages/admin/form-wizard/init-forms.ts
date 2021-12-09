import { IWizard } from '@src/components/form-wizard'
import { wizardActions } from '@src/store/actions'
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
    onSubmit: async (values, dispatch) => {
      //fetch data
      await sleep(1)

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
    onSubmit: async (values, dispatch) => {
      //fetch data
      await sleep(2)

      const ok = Math.floor(Math.random() * 2) == 1
      const code = Math.random().toFixed(6).substring(2, 8)

      dispatch(wizardActions.injectCode(code))

      const messages = ok
        ? ['ایمیل یا پیامک برای شما ارسال شد', `کد مورد نظر شما ${code} است`]
        : ['خطایی رخ داده لطفا مجددا امتحان کنید']

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
    onSubmit: async (values: any, dispatch, root) => {
      //fetch data
      await sleep(0.5)
      console.log(values)
      const ok = values.code == root.wizard.code

      const messages = ok
        ? ['ممنون از به تایید رساندن حسابتان']
        : ['کد وارد شده صحیح نمیباشد']
      return { ok, messages }
    }
  }
]
