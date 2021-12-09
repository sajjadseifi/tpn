import { IconButton, TitleUi } from '@src/components/ui'
import { colors } from '@src/constants'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { classes } from '.'

export const PresentTpn = () => {
  const history = useHistory()

  const nonFunctionalitySection = () => {}
  return (
    <div className={classes.PresentTpn}>
      <div>
        <TitleUi subject="شرکت توابن پردازش نگار" className={classes.Title} />
        <p className={classes.Content}>
          شرکت توان پردازش نگار در سال 1397 با همت فارغ التحصیلان دانشگاه تهران
          و امیر کبیر با تجربه طولانی در زمینه الکترونیک صنعتی (طراحی درایوهای
          کنترل موتور) تاسیس شد. این شرکت قصد دارد با تجربه موجود در صنعت،
          استفاده از تکنولوژی‌های اینترنت اشیا برای کنترل دستگاههای صنعتی را
          وارد حوزه کاری خود نماید.
        </p>
        <div className={`flex flex-just-center ${classes.BottomContainer}`}>
          <IconButton
            onClick={() => history.push('/admin/form-wizard')}
            outline
            bordered
            title="مشاهده دمو"
            color={colors.PRIMARY}
          />
          <IconButton title="شروع کن" color={colors.PRIMARY} />
        </div>
      </div>
    </div>
  )
}
