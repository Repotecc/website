import logo from './../assets/img/repotecc_logo.png';
import { Link } from 'react-router-dom';
//import './App.css';

function Navbar() {
  return (

    <div className="Navbar">
        <nav className="navbar navbar-expand-md fixed-top">
            <div className="container">
                <Link className="navbar-brand"    to="/">
                    <img alt="repotecc logo" src={logo} className="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span  className="bi-list"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        
                        <li className="nav-item active">
                            <Link className="nav-link"   aria-current="page" to="#why_join_us">Why join us?</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"   href="#hire_us">Hire us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"   href="#about_us">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"   href="#workshops">Our workshops</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"   href="#partners">Our partners</a>
                        </li>
                        <li className="nav-item">
        
                            <Link className="nav-link"   to="/team">Our team</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"   href="https://paystack.shop/repotecc">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"   href="#Contact_us">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
              
    </div>
    
  );
}

export default Navbar;
