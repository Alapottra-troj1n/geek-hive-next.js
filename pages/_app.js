import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react'
import AuthWrapper from '../components/AuthWrapper';
import LoginPage from '../components/LoginPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {

  const [signinVisible, setSigninVisible] = useState(false);


  return <>
    <SessionProvider session={pageProps.session} >
      <AuthWrapper>
      <ToastContainer />

        <Navbar setSigninVisible={setSigninVisible} signinVisible={signinVisible} />
        <Component signinVisible={signinVisible} setSigninVisible={setSigninVisible} {...pageProps} />
        {signinVisible && <LoginPage setSigninVisible={setSigninVisible} />}
        <Footer />
      </AuthWrapper>
    </SessionProvider>
  </>


}

export default MyApp
