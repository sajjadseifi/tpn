import { ItemProps } from '@src/components/sidebar/components'
import {
  AiFillHome,
  AiOutlineUsergroupAdd,
  AiOutlinePlus
} from 'react-icons/ai'

export const adminSidebarItems: ItemProps[] = [
  {
    id: 0,
    title: 'داشبورد',
    icon: AiFillHome,
    select: true
  },
  {
    id: 1,
    title: 'کاربران',
    icon: AiOutlineUsergroupAdd
  },
  {
    id: 2,
    title: 'افزودن',
    icon: AiOutlinePlus
  }
]
