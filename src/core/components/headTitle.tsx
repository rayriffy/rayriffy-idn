import { FunctionComponent } from 'react'

import Head from 'next/head'

interface Props {
  title?: string
  description?: string
}

export const HeadTitle: FunctionComponent<Props> = props => {
  const { children } = props

  return (
    <Head>
      <title key="head-title">Internationalized domain name converter</title>
      <meta key="title" name="title" content="Internationalized domain name converter" />
      <meta key="description" name="description" content="IDN encoding, and decoding tools" />

      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:url" property="og:url" content="/" />
      <meta key="og:title" property="og:title" content="Internationalized domain name converter" />
      <meta key="og:description" property="og:description" content="IDN encoding, and decoding tools" />

      <meta key="twitter:card" property="twitter:card" content="summary_large_image" />
      <meta key="twitter:url" property="twitter:url" content="/" />
      <meta key="twitter:title" property="twitter:title" content="Internationalized domain name converter" />
      <meta key="twitter:description" property="twitter:description" content="IDN encoding, and decoding tools" />

      <link
        key="link-font-inter"
        rel="stylesheet"
        href="https://rsms.me/inter/inter.css"
        media="screen,print"
      />

      {children}
    </Head>
  )
}
