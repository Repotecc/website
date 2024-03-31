
// import partnerlogo1 from './../assets/img/partners/Image 2.png';
import Head from 'next/head'



import  '../../src/styles/Team.module.css'
import Person from '../../components/Team/Person';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';



function Team() {
  

    return (
      
        <>
            <Head>
                <title>Meet Our Team| Repotecc</title>
                <meta name="description" content="Repotecc it's a tech community. We'll help you get started with creative and innovative skills."/>
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
  
