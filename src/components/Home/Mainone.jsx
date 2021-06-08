import image1 from './../../assets/img/59904.png';

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
                     <a target="_blank" rel="noopener noreferrer"  href="https://forms.gle/XSA4hZBoVsoSToKt6"> GET STARTED</a>
                </button>
            </div>
            <div  className="col-md-8">
                <img alt="vector 1" src={image1}  className="img-fluid" />
            </div>
        </div>


    </main>
  );
}

export default Mainone;
