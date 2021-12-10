import { PUBLIC_PAGE } from '@src/constants/path'
import React from 'react'
import { Link } from 'react-router-dom'
import { classes } from '.'

export const NotFound404Page = () => {
  return (
    <div className={classes.NotFoundContainer}>
      <div className={classes.NotFoundContent}>
        <div className={classes.T404}>
          <span className={classes.Numberic}>4</span>
          <span className={classes.Special}>{'</>'}</span>
          <span className={classes.Numberic}>4</span>
        </div>
        <div className={`codegen ${classes.Codegen}`}>
          <div className="codegen-line">
            <span className="codegen-func">Error404</span>
            <span className="codegen-spec">{'(){'}</span>
          </div>
          <div className={'codegen-body'}>
            <div className={'codegen-line'}>
              <span className={'codegen-iden'}>message</span>
              <span className={'codegen-space'}></span>
              <span className={'codegen-spec'}>=</span>
              <span className={'codegen-space'}></span>
              <span className={'codegen-spec'}>"</span>
              <span className={`fa-font  codegen-val-str`}>
                صفحه مورد نظر پیدا نشد
              </span>
              <span className={'codegen-spec'}>"</span>
            </div>

            <div className={'codegen-line'}>
              <div className="flex flex-align-start">
                <span className={'codegen-comment'}>//</span>
                <p className={'codegen-comment-val fa-font '}>
                  برای رفتن به صفحه اصلی روی این بخش کلیک کنید
                </p>
              </div>
            </div>
            <div className={'codegen-line'}>
              <span className={'codegen-iden'}>link</span>
              <span className={'codegen-space'}></span>
              <span className={'codegen-spec'}>=</span>
              <span className={'codegen-space'}></span>
              <span className={'codegen-spec'}>"</span>
              <Link to={PUBLIC_PAGE} className={'codegen-link'}>
                <span className={`fa-font codegen-val-str`}>
                  رفتن به صفحه اصلی
                </span>
              </Link>
              <span className={'codegen-spec'}>"</span>
            </div>
          </div>
          <div className={'codegen-line'}>
            <span className={'codegen-spec'}>{'}'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
