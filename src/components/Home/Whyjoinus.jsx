import image2 from './../../assets/img/undraw_wandering_mind_0mkm.png';
import image3 from './../../assets/img/undraw_time_management_30iu.png';
import image4 from './../../assets/img/undraw_team_page_pgpr.png';




// import './App.css';

function Whyjoinus() {
  return (
   

        <section id="why_join_us">
            <div  className="why-join-us">

                <div  className="row">
                    <div  className="col-md">
                        <img alt="vector 2" src={image2}  className="img-fluid" />
                    </div>
                    <div  className="col-md">
                        <h1><b>Do You Have The Passion?</b></h1>
                        <p>
                            Are you trying to figure what Tech field you wish to major in? Or you need to build yourself in the Tech field you are?
                        </p>
                    </div>
                </div>

                <div  className="row">
                    <div  className="col-md">
                        <h1><b>Do You Have The Time?</b></h1>
                        <p>
                            Our programmes last for a minimum of 2 months depending on the field and stacks you’ve chosen. You are welcome to apply if you are not fully dedicated to something else.
                        </p>
                    </div>
                    <div  className="col-md">
                        <img alt="vector  3" src={image3}  className="img-fluid" />
                    </div>
                </div>

                <div  className="row">
                    <div  className="col-md">
                        <img alt="vector 4" src={image4}  className="img-fluid" />
                    </div>
                    <div  className="col-md">
                        <h1><b>Join Us</b></h1>
                        <p>
                            We are a non-profit tech community dedicated to supporting the rising tech ecosystem in Nigeria and Africa as a whole. If you have the enthusiasm to learn, join us now!
                        </p>
                    </div>
                </div>

                <div  className="center">
                    <button>
                   <a href="https://forms.gle/XSA4hZBoVsoSToKt6">JOIN US</a>
                </button>
                </div>

                <br />

            </div>
        </section>

        
  );
}

export default Whyjoinus;
