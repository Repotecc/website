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
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,800;1,400;1,500;1,700&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </>
  );
       
  
  
}

export default MyApp
