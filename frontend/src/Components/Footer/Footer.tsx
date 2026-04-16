import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>LittleHearts Foundation</h3>
        <p>
          Together, we bring smiles, education, and care to children in need —
          building a brighter tomorrow, one heart at a time.
        </p>



        {/* --- Social Media Icons --- */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        </div>

        <div className="footer-bottom">
          © 2025 LittleHearts Foundation | Made with ❤️ for Every Child
        </div>
      </div>
    </footer>
  );
}

export default Footer;
