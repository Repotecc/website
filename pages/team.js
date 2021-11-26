
// import partnerlogo1 from './../assets/img/partners/Image 2.png';
import Head from 'next/head'



import  '../styles/Team.module.css'
import Person from '../components/Team/Person';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



function Team() {
  

    return (
      
        <>
            <Head>
                <title>Meet Our Team| Repotecc</title>
                <meta name="description" content="Repotecc it's a tech community. We'll help you get started with creative and innovative skills."/>
                <meta name="robots" content="index, follow" />
                <link rel="icon" href="public/assets/img/repotecc app logo.png" />
                <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"/><link rel="canonical" href="https://repotecc.com/" />
            </Head>
            <Navbar />
            <section className="teams">
      
        
                <div className="team-header">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-12 text-center">
                        
                                <h1><b>Meet Our Teams</b></h1>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-list">
                    <div className="container">
                        <div className="row">
                            <Person />    
                        </div>
                    </div>
                </div>
         

            </section>
            <Footer />
        </>
    );
  }
  
  export default Team;
  
