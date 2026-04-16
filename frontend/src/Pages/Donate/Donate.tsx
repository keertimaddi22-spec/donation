import { useState } from "react";
import "./Donate.css";
import { motion } from "framer-motion"; // ✅ Added only this

function Donate() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    type: "",
  });
  const [showModal, setShowModal] = useState(false);

  const presetAmounts = [50, 100, 250, 500];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setFormData({ name: "", email: "", amount: "", type: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}   // ✅ smooth fade + slide
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}     // ✅ smoothness
      className="donate-page"
    >
      <div className="donate-container">
        <h2>Make a Difference 💛</h2>
        <p>
          Your small act of kindness can light up a child’s future.  
          100% of your donation goes toward food, education, and healthcare.
        </p>

        <form onSubmit={handleSubmit} className="donate-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="">Select Donation Type</option>
            <option value="Food">Food</option>
            <option value="Education">Education</option>
            <option value="Clothing">Clothing</option>
            <option value="Healthcare">Healthcare</option>
            <option value="General">General Support</option>
          </select>

          <input
            type="number"
            name="amount"
            placeholder="Enter Amount (₹)"
            value={formData.amount}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value < 0) return;
              setFormData({ ...formData, amount: e.target.value });
            }}
            min="50"
            required
          />

          <div className="preset-amounts">
            {presetAmounts.map((amt) => (
              <div
                key={amt}
                className={`amount-circle ${
                  formData.amount === String(amt) ? "active" : ""
                }`}
                onClick={() =>
                  setFormData({ ...formData, amount: String(amt) })
                }
              >
                ₹{amt}
              </div>
            ))}
          </div>

          <button type="submit">Donate Now</button>
        </form>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>🌸 Thank You!</h3>
            <p>Your kindness keeps LittleHearts beating brighter every day🫶🏻</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Donate;
