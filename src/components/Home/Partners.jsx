import partnerlogo1 from './../../assets/img/partners/Image 2.png';
import partnerlogo2 from './../../assets/img/partners/Image 6.png';
import partnerlogo3 from './../../assets/img/partners/Image 7.png';
import partnerlogo4 from './../../assets/img/partners/Image 8.png';
import partnerlogo5 from './../../assets/img/partners/IMG_3813.png';
import partnerlogo6 from './../../assets/img/partners/IMG_3816.png';
import partnerlogo7 from './../../assets/img/partners/Rectangle 54.png';
import partnerlogo8 from './../../assets/img/partners/Rectangle 55.png';





// import './App.css';

function Partners() {
    return (
      <main  className="container">
  
         
  
        
          <section id="partners"  className="nav-clear-margin">
              <div  className="container partners">
                  <h1><b>OUR PARTNERS AND SPONSORS</b></h1>
                   <br />
                  <div  className="row">
                      <div  className="col-lg-12 text-center">
                          <div  className=" partners-img">
                              {/* <!--<div  className="owl-carousel">--> */}
                                  <div  className="single-client">
                                  <a href="/#"><img alt="partner/sponsor"  className="img-fluid partner-img" src={partnerlogo1} /></a>
                                  </div>
                                  <div  className="single-client">
                                      <a href="/#"><img alt="partner/sponsor"  className="img-fluid partner-img" src={partnerlogo2}/></a>
                                  </div>
                                  <div  className="single-client">
                                      <a href="/#"><img alt="partner/sponsor"  className="img-fluid partner-img" src={partnerlogo3} /></a>
                                  </div>
                                  <div  className="single-client">
                                      <a href="/#"><img alt="partner/sponsor"  className="img-fluid partner-img" src={partnerlogo4} /></a>
                                  </div>
                                  <div  className="single-client">
                                      <a href="/#"><img alt="partner/sponsor"  className="img-fluid partner-img" src={partnerlogo5} /></a>
                                  </div>
                                  <div  className="single-client">
                                      <a href="/#"><img alt="partner/sponsor"  className="img-fluid partner-img" src={partnerlogo6} /></a>
                                  </div>
                                  <div  className="single-client">
                                      <a href="/#"><img alt="partner/sponsor"  className="img-fluid partner-img" src={partnerlogo7} /></a>
                                  </div>
                                  <div  className="single-client">
                                      <a href="/#"><img alt="partner/sponsor"  className="img-fluid partner-img" src={partnerlogo8} /></a>
                                  </div>
                              {/* <!--</div>--> */}
  
                              
                          </div>
                      </div>
                  </div>
              </div>
          </section>
  
        
      </main>
    );
  }
  
  export default Partners;
  