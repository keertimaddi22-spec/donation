import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaAlignCenter } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const isLoggedIn = localStorage.getItem("token");

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="logo">LittleHearts</div>

        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/mission" onClick={() => setMenuOpen(false)}>Our Mission</Link>
          </li>
          <li>
            <Link to="/getinvolved" onClick={() => setMenuOpen(false)}>Get Involved</Link>
          </li>
          <li>
            <Link to="/donate" onClick={() => setMenuOpen(false)}>Donate</Link>
          </li>
          <li>
            <Link to="/news" onClick={() => setMenuOpen(false)}>News</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
        </ul>

        {/* ✅ CLEAN BUTTONS (NO ANIMATION) */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          
          <Link
            to="/donate"
            className="donate-btn"
            onClick={() => setMenuOpen(false)}
          >
            Donate Now
          </Link>

          {isLoggedIn ? (
            <button
              className="logout-btn"
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/login";
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="login-btn">
              Login
            </Link>
          )}

        </div>
      </motion.nav>

      {/* Floating Donate Button */}
      <Link to="/donate" className="floating-donate">
        Donate Now
      </Link>
    </>
  );
};

export default Navbar;