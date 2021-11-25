import image1 from '../../public/assets/img/59904.png';

import Image from 'next/image'
import Link from 'next/link';
// import './App.css';

function Mainone() {
  return (
    <main  className="container">

        <div  className="row nav-clear-margin section-1">
            <div  className="col-md-4">
                <h1><b>Find Your  <br /> Way In Tech</b></h1>
                <p>
                    We'll help you get started with <b>creative</b> and <b>innovative</b> skills. We'll help you get started in tech!
                </p>
                <button>
                     <Link target="_blank" rel="noopener noreferrer"  href="https://forms.gle/XSA4hZBoVsoSToKt6"> 
                        <a> GET STARTED</a>
                      </Link>
                </button>
            </div>
            <div  className="col-md-8">
                <Image alt="vector 1" src={image1}  className="img-fluid" />
            </div>
        </div>


    </main>
  );
}

export default Mainone;
