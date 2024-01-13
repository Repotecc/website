import Link from 'next/link'

function Footer() {
    const year = new Date().getFullYear();
  return (
      <footer>
          <div className="container">
              <div className="row">
                  <div className="col-md">
                      <h2 className="footer-title"><b>Repotecc</b></h2>
                      <ul>
                          <li>
                              <Link href="/#why_join_us">
                                  Why join us?
                              </Link>
                          </li>
                          <li>
                             <Link href="/#hire_us"> 
                                   Hire us
                              </Link>
                          </li>
                          <li>
                              <Link href="/#about_us"> 
                                   About us
                              </Link>
                          </li>
                          <li>
                              <Link href="/#workshops">
                                  Workshops
                              </Link>
                          </li>
                          <li>
                             <Link  href="/#partners">
                                 Sponsors and partners
                              </Link>
                          </li>
                          <li>
                              <Link  href="/team">
                                  Our team members
                              </Link>
                          </li>
                          <li><a href="https://paystack.shop/repotecc">Shop</a></li>
                          <li>
                              <Link href="/#Contact_us">Contact us</Link>
                          </li>
                      </ul>
                  </div>
                  <div className="col-md">
                      <h2 className="footer-title"><b>Join Repotecc</b></h2>
                      <ul>
                          <li><a href="https://forms.gle/XSA4hZBoVsoSToKt6">Join to get trained/mentored</a></li>
                          <li><a href="https://forms.gle/64BhE4vk68XsmXj98">Join as a mentor</a></li>
                          <li><a href="https://forms.gle/dYs3iQoHvLj6RVaZ6">Become a partner</a></li>
                      </ul>
                  </div>
                  <div className="col-md">
                      <h2 className="footer-title"><b>Get started</b></h2>
                      <ul>
                          <li><a href="https://forms.gle/fFUwKjR9TT43c5RR8">Hire us for project development</a></li>
                          <li>
                              <Link href="/#">Hire us to train people</Link>
                          </li>
                          <li><a href="https://bit.ly/repoteccsupport">Support Us</a></li>
                      </ul>
                  </div>
              </div>
              <br />
              <div className="row">
                  <div className="col-md"><a href="#">Terms of Use</a></div>
                  <div className="col-md"><a href="#">Privacy Policy</a></div>
                  <div className="col-md-8 text-end">
                      Copyright &copy; Repotecc {year}
                  </div>
              </div>
          </div>
      </footer>
  );
}

export default Footer;