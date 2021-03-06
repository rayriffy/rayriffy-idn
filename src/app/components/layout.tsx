import { FunctionComponent, Fragment } from 'react'

import { Footer } from './footer'
import { ServiceWorker } from './serviceWorker'

export const AppLayout: FunctionComponent = props => {
  const { children } = props

  return (
    <Fragment>
      <main className="bg-white min-h-screen">{children}</main>
      <Footer />
      <ServiceWorker />
    </Fragment>
  )
}
