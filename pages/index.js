import Head from 'next/head'
import '../styles/Home.module.css'



import Navbar from '../components/Navbar';
import Mainone from '../components/Home/Mainone';
// import reportWebVitals from './reportWebVitals';
import Whyjoinus from '../components/Home/Whyjoinus';
import Hireus from '../components/Home/Hireus';
import Aboutus from '../components/Home/Aboutus';
import Workshops from '../components/Home/Workshops';
import Partners from '../components/Home/Partners';
import Contactus from '../components/Home/Contactus';
// import PageNotFound from './components/404-page';
import Shop from '../components/Home/Shop';
import Subscriber from '../components/Home/Subcriber';
import Footer from '../components/Footer';



export default function Home() {
  return (
    <>
      <Head>
        <title>#FindYourWayInTech | Repotecc</title>
        <meta name="description" content="Repotecc it's a tech community. We'll help you get started with creative and innovative skills."/>
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="public/assets/img/repotecc app logo.png" />
        <meta name="robots" content="index, follow" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"/><link rel="canonical" href="https://repotecc.com/" />
      </Head>
      <Navbar />
      <main className="container">
        <Mainone />
        <Whyjoinus />
        <Hireus />
        <Aboutus />
        <Workshops />
        <Shop />
        <Partners />
        <Contactus />
        <Subscriber />
      </main>
     
      <Footer />
    </>
  )
}
