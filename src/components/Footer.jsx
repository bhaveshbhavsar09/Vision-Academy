import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-about">
          <Link to="/" className="logo">
            <img src="/logo.webp" alt="Vision Academy Logo" className="logo-img" />
            Vision<span>Academy</span>
          </Link>
          <p>Empowering the leaders of tomorrow through innovation, character building, and academic excellence.</p>
          <div className="social-links">
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Parent Portal</a></li>
            <li><a href="#">Student Portal</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li><i className="fa-solid fa-location-dot"></i> 123 Education Blvd, City</li>
            <li><i className="fa-solid fa-phone"></i> +1 (555) 123-4567</li>
            <li><i className="fa-solid fa-envelope"></i> info@visionacademy.edu</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Vision Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}
