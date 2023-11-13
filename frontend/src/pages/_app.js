// pages/_app.js

import '@/styles/globals.css';
import '../../public/assets/css/styles.css';
import '../styles/scss/theme.scss';
import Layout from '@/layout/Layout';

export default function App({ Component, pageProps, router }) {
  const isLoginPage = router.pathname === '/login';
  const isSignupPage = router.pathname === '/signup';

  const shouldIncludeNavbarAndFooter = !(isLoginPage || isSignupPage);

  return (
    <Layout includeNavbar={shouldIncludeNavbarAndFooter} includeFooter={shouldIncludeNavbarAndFooter}>
      <Component {...pageProps} />
    </Layout>
  );
}
