import partnerlogo1 from '../../public/assets/img/partners/Image 2.png';
import partnerlogo2 from '../../public/assets/img/partners/Image 6.png';
import partnerlogo3 from '../../public/assets/img/partners/Image 7.png';
import partnerlogo4 from '../../public/assets/img/partners/Image 8.png';
import partnerlogo5 from '../../public/assets/img/partners/IMG_3813.png';
import partnerlogo6 from '../../public/assets/img/partners/IMG_3816.png';
import partnerlogo7 from '../../public/assets/img/partners/Rectangle 54.png';
import partnerlogo8 from '../../public/assets/img/partners/Rectangle 55.png';


import Image from 'next/image'





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
                                  <a href="#"><Image alt="partner/sponsor"  className="img-fluid partner-img" src={partnerlogo1} placeholder="blur" /></a>
                                  </div>
                                  <div  className="single-client">
                                      <a href="#"><Image alt="partner/sponsor"  className="img-fluid partner-img" src={partnerlogo2} placeholder="blur"/></a>
                                  </div>
                                  <div  className="single-client">
                                      <a href="#"><Image alt="partner/sponsor"  className="img-fluid partner-img" src={partnerlogo3}  placeholder="blur"/></a>
                                  </div>
                                  <div  className="single-client">
                                      <a href="#"><Image alt="partner/sponsor"  className="img-fluid partner-img" src={partnerlogo4} placeholder="blur"/></a>
                                  </div>
                                  <div  className="single-client">
                                      <a href="#"><Image alt="partner/sponsor"  className="img-fluid partner-img" src={partnerlogo5} placeholder="blur"/></a>
                                  </div>
                                  <div  className="single-client">
                                      <a href="#"><Image alt="partner/sponsor"  className="img-fluid partner-img" src={partnerlogo6} placeholder="blur"/></a>
                                  </div>
                                  <div  className="single-client">
                                      <a href="#"><Image alt="partner/sponsor"  className="img-fluid partner-img" src={partnerlogo7} placeholder="blur"/></a>
                                  </div>
                                  <div  className="single-client">
                                      <a href="#"><Image alt="partner/sponsor"  className="img-fluid partner-img" src={partnerlogo8} placeholder="blur"/></a>
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
  