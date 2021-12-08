// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,800;1,400;1,500;1,700&display=swap" rel="stylesheet" />
          <meta name="google-site-verification" content="eoCKL-RlUh2aEXEum8hdyMzEN1mC6Y4BMyw8ICuJyqQ" />
          <meta name="robots" content="index, follow" />
          <link rel="icon" href="assets/img/repotecc app logo.png" />
          <meta name="robots" content="index, follow" />
          <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"/><link rel="canonical" href="https://repotecc.com/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
