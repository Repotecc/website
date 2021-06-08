import image5 from './../../assets/img/undraw_programming_2svr.png';
import Hireusform from './Hireusform';

// import './App.css';

function Hireus() {
    return (
      
  
         
  
          <section id="hire_us"  className="nav-clear-margin">
              <div  className="row hire-us">
                  <div  className="col-md">
                      <h1><b>HIRE US</b></h1>
                      <p>We'll match you with the best people for your project.</p>
  
                      <Hireusform />
                  </div>
  
                  <div  className="col-md">
                      <img alt="vector  5" src={image5}  className="img-fluid" />
                  </div>
              </div>
          </section>
  
       
  
      
    );
  }
  
  export default Hireus;
  