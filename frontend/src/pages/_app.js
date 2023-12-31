// pages/_app.js
import { useEffect } from 'react';
import { initGA, logPageView } from '../utils/analytics'; 
import '@/styles/globals.css';
import '../../public/assets/css/styles.css';
import '../styles/scss/theme.scss';
import Layout from '@/layout/Layout';

export default function App({ Component, pageProps, router }) {
  // const isLoginPage = router.pathname === '/login';
  // const isSignupPage = router.pathname === '/signup';
  // const isShowcasePage = router.pathname === '/showcase';
  // const isProfilePage = router.pathname === '/profile';
  // const isFormPage = router.pathname === '/form';
  // const is404Page = router.pathname === '/404';

  // const shouldIncludeNavbarAndFooter = !(isLoginPage || isSignupPage || isShowcasePage || isProfilePage || isFormPage || is404Page);

  useEffect(() => {
    // Initialize Google Analytics
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }

    // Log the page view
    logPageView();
  }, [router.pathname]); // Track page views on route changes

  return (
      <Component {...pageProps} />
  );
}
