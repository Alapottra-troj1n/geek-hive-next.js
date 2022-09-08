import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import {SessionProvider} from 'next-auth/react'

function MyApp({ Component, pageProps }) {

  const [signinVisible, setSigninVisible] = useState(false);


  return <>
    <SessionProvider session={pageProps.session} >


      <Navbar setSigninVisible={setSigninVisible} signinVisible={signinVisible} />
      <Component signinVisible={signinVisible} setSigninVisible={setSigninVisible} {...pageProps} />
      <Footer />

    </SessionProvider>
  </>


}

export default MyApp
