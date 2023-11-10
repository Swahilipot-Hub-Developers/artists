import '@/styles/globals.css'
import '../../public/assets/css/styles.css'

import '../styles/scss/theme.scss'
import Layout from '@/layout/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
