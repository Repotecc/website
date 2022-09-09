import image6 from '../../public/assets/img/undraw_team_ih79.png';

import Image from 'next/image'

// import './App.css';

function Aboutus() {
    return (
   
  
         
  
         
          <section id="about_us"  className="nav-clear-margin">
  
              <div  className="row about-us">
                  <div  className="col-md">
                      <Image alt="vector  6" src={image6} className="img-fluid" />
                  </div>
                  <div  className="col-md">
                       <br />
                      <h1><b>OUR ACHIEVEMENT</b></h1>
                      <p>
                          A non profit tech community dedicated to support more Nigerians and Africans into the tech world.
                      </p>
                       <br /> <br />
                      <div  className="row">
                          <div  className="col">
                              <h1><b>3000+</b></h1>
                              <h5>People mentored</h5>
                          </div>
                          <div  className="col">
                              <h1><b>6</b></h1>
                              <h5>Partnerships</h5>
                          </div>
                          <div  className="col">
                              <h1><b>1</b></h1>
                              <h5>Awards won</h5>
                          </div>
                      </div>
                       <br />
                      <div  className="row">
                          <div  className="col">
                              <h1><b>46</b></h1>
                              <h5>Donations</h5>
                          </div>
                          <div  className="col">
                              <h1><b>3</b></h1>
                              <h5>Events</h5>
                          </div>
                          <div  className="col">
                              <h1><b>33</b></h1>
                              <h5>Available mentors</h5>
                          </div>
                      </div>
                  </div>
              </div>
  
          </section>
  
     
    );
  }
  
  export default Aboutus;
  
