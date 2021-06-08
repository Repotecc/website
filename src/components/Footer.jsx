// import logo from './../../assets/img/repotecc_logo.png';
// import { Link } from 'react-router-dom';
//import './App.css';

function Footer() {
  return (

        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <h2 className="footer-title"><b>Repotecc</b></h2>
                        <ul>
                            <li><a href="#why_join_us">Why join us?</a></li>
                            <li><a href="#hire_us">Hire us</a></li>
                            <li><a href="#about_us">About us</a></li>
                            <li><a href="#workshops">Workshops</a></li>
                            <li><a href="#partners">Sponsors and partners</a></li>
                            <li><a href="/team">Our team members</a></li>
                            <li><a href="https://paystack.shop/repotecc">Shop</a></li>
                            <li><a href="index.html#Contact_us">Contact us</a></li>
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
                            <li><a href="/#">Hire us to train people</a></li>
                        </ul>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md"><a href="terms.html">Terms of Use</a></div>
                    <div className="col-md"><a href="policy.html">Privacy Policy</a></div>
                    <div className="col-md-8 text-end">
                        Copyright &copy; Repotecc
                        <script>
                            document.write(new Date().getFullYear());
                        </script>
                    </div>
                </div>
            </div>
        </footer>
  );
}

export default Footer;
