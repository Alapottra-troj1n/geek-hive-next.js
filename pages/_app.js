import { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [signinVisible, setSigninVisible] = useState(false);


  return <>

    <Navbar setSigninVisible={setSigninVisible} signinVisible={signinVisible}  />
    <Component signinVisible={signinVisible} setSigninVisible={setSigninVisible} {...pageProps} />
    <Footer />

  </>


}

export default MyApp
