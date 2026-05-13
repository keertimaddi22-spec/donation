import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Contact.css";

function Contact() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setSubmitted(true);
  setTimeout(() => {
    setSubmitted(false);
    setModalOpen(false);
  }, 4000);
};

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="contact-container">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="contact-title">Get in Touch 🌻</h2>
        <p className="contact-subtitle">
          We’d love to connect with you — reach out or share your thoughts with us.
        </p>

        {/* Contact Info Card */}
        <motion.div
          className="contact-info-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Contact Information</h3>
          <p><strong>📍 Address:</strong> 23 Hope Street, City Center, India</p>
          <p><strong>📧 Email:</strong> hello@littlehearts.org</p>
          <p><strong>📞 Phone:</strong> +91 98765 43210</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </motion.div>

        {/* Feedback Button */}
        <motion.button
          className="feedback-btn"
          whileHover={{ scale: 1.05 }}
          onClick={() => setModalOpen(true)}
        >
          Share Feedback 💬
        </motion.button>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {!submitted ? (
                <>
                  <h2>Feedback Form</h2>

                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Your Name</label>
                      <input type="text" placeholder="Enter your name" required />
                    </div>

                    <div className="form-group">
                      <label>Your Email</label>
                      <input type="email" placeholder="Enter your email" required />
                    </div>

                    <div className="form-group">
                      <label>How would you rate our organisation?</label>
                      <select required>
                        <option value="">Select Rating</option>
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Average">Average</option>
                        <option value="Poor">Poor</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Your Suggestions</label>
                      <textarea
                        rows={3}
                        placeholder="Tell us what can make us better..."
                        required
                      ></textarea>
                    </div>

                    <div className="thank-buttons">
                      <button type="submit" className="submit-btn">Submit</button>
                      <button type="button" className="cancel" onClick={handleClose}>
                        Cancel
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <motion.div
                  className="thankyou-message"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3>Thank you 💛</h3>
                  <p>Your valuable feedback means the world to us!</p>
                  <p className="thank-para">
                    Every message we receive helps us grow stronger and reach more hearts.  
                    We truly appreciate you taking the time to share your thoughts.  
                    You’re always welcome to visit our website again, explore our work,  
                    and be part of the LittleHearts family. Together, we can make a difference 🌼
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Contact;
