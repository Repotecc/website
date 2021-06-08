// import image1 from './../assets/img/59904.png';

const { default: Contactusform } = require("./Contactusform");

// import './App.css';

function Contactus() {
    return (
      <main  className="container">
  
         
  
          <section id="Contact_us"  className="nav-clear-margin">
              <div  className="container contact-us">
                  <h1><b>CONTACT US</b></h1>
                  <h4>GET IN TOUCH WITH US</h4>
                   <br />
                  <div  className="contact-media center">
                      <ul>
                          <li><a href="mailto:info@repotecc.com"><span  className="bi-envelope-fill"></span> info@repotecc.com</a></li>
                          <li><a href="tel:+2348012345678"><span  className="bi-telephone-fill"></span> 0801-234-5678</a></li>
                          <li><a href="https://twitter.com/RepoTecc" target="_blank" rel="noopener noreferrer"><span  className="bi-twitter"></span> RepoTecc</a></li>
                          <li><a href="https://instagram.com/repotecc" target="_blank" rel="noopener noreferrer"><span  className="bi-instagram"></span> repotecc</a></li>
                          <li><a href="https://facebook.com/Repotecc" target="_blank" rel="noopener noreferrer"><span  className="bi-facebook"></span> Repotecc</a></li>
                      </ul>
                  </div>
                   <br /> <br />
                  <h3  className="text-center">Send us a message</h3>
                   <br />
                  <div  className="row">
                      <div  className="col-lg-12">
                          <Contactusform />
                      </div>
                  </div>
              </div>
          </section>
  
  
      </main>
    );
  }
  
  export default Contactus;
  