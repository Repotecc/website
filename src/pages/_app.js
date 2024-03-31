//bootstrap style
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect } from "react";
import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);
    return(

        <>
        <Component {...pageProps} />
      </>
  );
       
  
  
}

export default MyApp
