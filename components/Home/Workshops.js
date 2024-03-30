// import image1 from './../assets/img/59904.png';

// import './App.css';
import Link from 'next/link';

function Workshops() {
    return (
        <main  className="container">
    
           
    
            <section id="workshops"  className="nav-clear-margin">
                <div  className="workshops">
                    <h1><b>OUR TECH WORKSHOPS</b></h1>
                     <br /> <br />
                    <div  className="row">
                        <div  className="col-md">
                            <h3><b>Web Development</b></h3>
                            <p>
                                Learn to build a good robust website and become a full stack web developer starting from the
                                 core foundations of a delightful web experience both for the user and developer.
                               
                            </p>
                        </div>
                        <div  className="col-md">
                            <h3><b>Mobile Development</b></h3>
                            <p>
                                Learn to become a Mobile Developer Either An Android Or IOS Developer using technologies
                                like kotlin with Android, swift with xcode and flutter a fullstack technology platform.
                            </p>
                        </div>
                        <div  className="col-md">
                            <h3><b>Cyber security</b></h3>
                            <p>
                               Learn to become cyber security expert and protect computers from cyber attacks from the basis to advance level.

                            </p>
                        </div>
                    </div>
                     <br /> <br /> <br />
                    <div  className="row">
                        <div  className="col-md">
                            <h3><b>Modeling and simulation</b></h3>
                            <p>
                                learn to Become a 3d artists by modeling 3d objects with software like maya, blender, inventor etc.
                            </p>
                        </div>
                        <div  className="col-md">
                            <h3><b>Product Designer</b></h3>
                            <p>
                                Learn to become a UI&UX designer or also become a graphics designer, learn  the essential skills you need to launch a career in them. <br/>
                                Learn how to solve real-world UX problems.
                            </p>
                        </div>
                        <div  className="col-md">
                            <h3><b>Animation and motion graphics</b></h3>
                            <p>
                                Learn to Become A 3d designers and become a pro Animator…
                            </p>
                        </div>
                    </div>
                     <br />
                    <div  className="center">
                          <Link href="/team">
                                
                                  MEET OUR TEAM
                              
                          </Link>
                    </div>
                </div>
            </section>
          
    
        </main>
    );
  }
  
  export default Workshops;
  