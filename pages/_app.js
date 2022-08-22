import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return <>
    <div className="max-w-7xl mx-auto" >
      <Navbar />
      <Component {...pageProps} />
    </div>
  </>


}

export default MyApp
