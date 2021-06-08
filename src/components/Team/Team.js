import React from 'react';
//import {useState} from 'react';
// import ReactDOM from 'react-dom';

// import partnerlogo1 from './../assets/img/partners/Image 2.png';






import './Team.css';
import Person from './Person';


function Team() {
  

    return (
      
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
    );
  }
  
  export default Team;
  