import { Fragment } from 'react'

import { NextPage } from 'next'
import { AppProps } from 'next/app'

import { HeadTitle } from '../core/components/headTitle'
import { AppLayout } from '../app/components/layout'

import '../styles/tailwind.css'

const NextApp: NextPage<AppProps> = props => {
  const { Component, pageProps } = props

  return (
    <Fragment>
      <HeadTitle />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Fragment>
  )
}

export default NextApp
