import * as colors from '@src/constants/colors'
import { BsArrowLeftShort, BsArrowRightShort, BsCheck } from 'react-icons/bs'

export const prevBtn = {
  color: colors.RED,
  title: 'قبلی',
  icon: BsArrowRightShort,
  iconProps: { size: 20 }
}
export const nextBtn = {
  color: colors.BLUE,
  title: 'بعدی',
  icon: BsArrowLeftShort,
  iconProps: { size: 20 },
  revers: true
}
export const submitedBtn = {
  color: colors.GREEN,
  title: 'ارسال',
  icon: BsCheck,
  iconProps: { size: 20 }
}
