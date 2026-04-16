import { useState } from "react";
import "./FormModal.css";

function FormModal({ selectedHelp, closeForm }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* BACKDROP */}
      <div className="form-backdrop" onClick={closeForm}></div>

      {/* FORM CONTAINER */}
      <div className="form-container">
        {!submitted ? (
          <>
            <h2>Get Involved – {selectedHelp}</h2>

            <form onSubmit={handleSubmit} className="involved-form">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Phone Number" required />
              <input type="text" placeholder="City / Location" required />

              <select required>
                <option value="">Preferred Mode of Contact</option>
                <option>Email</option>
                <option>Phone</option>
                <option>WhatsApp</option>
              </select>

              <select required>
                <option value="">How were you introduced to Little Hearts?</option>
                <option>Social Media</option>
                <option>Friend / Family</option>
                <option>Event</option>
                <option>Other</option>
              </select>

              <select required>
                <option value="">How soon can you start?</option>
                <option>Immediately</option>
                <option>This Week</option>
                <option>This Month</option>
              </select>

              <button type="submit" className="btn-gradient">Submit</button>
              <button type="button" className="btn-back" onClick={closeForm}>Cancel</button>
            </form>
          </>
        ) : (
          <div className="thankyou-box">
            <h2>Thank You! 💛</h2>
            <p>We’ve received your information. Our team will contact you soon.</p>

            <button className="btn-gradient" onClick={closeForm}>Close</button>
          </div>
        )}
      </div>
    </>
  );
}

export default FormModal;
