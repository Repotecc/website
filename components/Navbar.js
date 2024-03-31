import logo from '../public/assets/img/repotecc_logo.png';
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
      <div className="Navbar">
          <nav className="navbar navbar-expand-lg fixed-top">
              <div className="container">
                  <Link href="/" className="navbar-brand">
                      <Image alt="repotecc logo" src={logo} className="loo" width={150} height={51} />
                  </Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="bi-list"></span>
                  </button>

                  <div className="collapse navbar-collapse ml-auto ms-auto" id="navbarsExampleDefault">
                      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                          <li className="nav-item active">
                              <Link href="/#why_join_us" className="nav-link" aria-current="page">Why join us?</Link>
                          </li>
                          <li className="nav-item">
                              <Link href="/#hire_us" className="nav-link">Hire us</Link>
                          </li>
                          <li className="nav-item">
                              <Link href="/#about_us" className="nav-link">About us</Link>
                          </li>
                          <li className="nav-item">
                              <Link href="/#workshops" className="nav-link">Our workshops</Link>
                          </li>
                          <li className="nav-item">
                              <Link href="/team" className="nav-link">Our team</Link>
                          </li>
                          <li className="nav-item">
                              <Link href="https://paystack.shop/repotecc" className="nav-link">Shop</Link>
                          </li>
                          <li className="nav-item">
                              <Link href="/#Contact_us" className="nav-link">Contact us</Link>
                          </li>
                      </ul>
                      <div className="d-flex">
                          <a target="_blank" rel="noopener noreferrer" className="btn btn-outline-success" href="https://paystack.com/pay/repotecc">
                              DONATE
                          </a>
                      </div>
                  </div>
              </div>
          </nav>
      </div>
  );
}

export default Navbar;