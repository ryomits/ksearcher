import Head from 'next/head'
import { AppLayout } from '@layouts/App'

function App({ Component, pageProps }: any) {
  const { csrfToken, login, ...restProps } = pageProps

  return (
    <>
      <Head>
        <meta name="viewport" content="user-scalable=no, viewport-fit=cover" />
      </Head>
      <AppLayout>
        <Component {...restProps} />
      </AppLayout>
    </>
  )
}

export default App
