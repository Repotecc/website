import Link from 'next/link'

function Footer() {
  return (

        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <h2 className="footer-title"><b>Repotecc</b></h2>
                        <ul>
                            <li>
                                <Link href="/#why_join_us">
                                    <a>Why join us?</a>
                                </Link>
                            </li>
                            <li>
                               <Link href="/#hire_us"> 
                                    <a> Hire us</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about_us"> 
                                    <a> About us</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#workshops">
                                    <a>Workshops</a>
                                </Link>
                            </li>
                            <li>
                               <Link  href="/#partners">
                                   <a>Sponsors and partners</a>
                                </Link>
                            </li>
                            <li>
                                <Link  href="/team">
                                    <a>Our team members</a>
                                </Link>
                            </li>
                            <li><a href="https://paystack.shop/repotecc">Shop</a></li>
                            <li>
                                <Link href="/#Contact_us"><a>Contact us</a></Link>
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
                                <Link href="/#"><a>Hire us to train people</a></Link>
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
                        Copyright &copy; Repotecc 2023
                    </div>
                </div>
            </div>
        </footer>
  );
}

export default Footer;
