import React from 'react';

import {
  BrowserRouter as 
  Router,
  Route,
  Switch,
  
} from "react-router-dom";

//bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';

// custom style
import './main.css';


import Navbar from './components/Navbar';
import Mainone from './components/Home/Mainone';
// import reportWebVitals from './reportWebVitals';
import Whyjoinus from './components/Home/Whyjoinus';
import Hireus from './components/Home/Hireus';
import Aboutus from './components/Home/Aboutus';
import Workshops from './components/Home/Workshops';
import Partners from './components/Home/Partners';
import Contactus from './components/Home/Contactus';
import Footer from './components/Footer';
import Subscriber from './components/Home/Subcriber';

//  team page
import Team from './components/Team/Team.js';
import Shop from './components/Home/Shop';
//import { Router } from "react-router-dom/cjs/react-router-dom.min";

function App() {
    return (
        <>
            <Router>
            <Navbar />
            <main  className="container">
                <Switch>    
                    <Route path="/" exact>
                        <Mainone />
                        <Whyjoinus />
                        <Hireus />
                        <Aboutus />
                        <Workshops />
                        <Shop />
                        <Partners />
                        <Contactus />
                        <Subscriber />
                    </Route>

                    <Route path="/team">
                        <Team />
                    </Route>
                    <Route component={Shop} />
                </Switch>
            </main>
            <Footer />
            </Router>
                            
        </>
              
    );
  }
  
  export default App;
