import { useState } from "react";
import { motion } from "framer-motion";
import "./GetInvolvedFull.css";
import InvolvedForm from "./InvolvedForm";

function GetInvolvedFull() {
  const [modalOpen, setModalOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedHelp, setSelectedHelp] = useState("");

  const handleButtonClick = (type: string) => {
    setSelectedHelp(type);
    setModalOpen(true);
  };

  const handleProceed = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setModalOpen(false);
  };

  return (
    <>
      {/* PAGE CONTENT */}
      <motion.section
        className={`involved-full ${modalOpen ? "blur-bg" : ""}`}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>Get Involved</h1>
        <p>Your support can transform a life. Choose how you'd like to help:</p>

        <div className="full-cards">
          <motion.div className="full-card">
            <h2>💛 Sponsor a Child</h2>
            <p>
              Your sponsorship ensures education, nutritious meals, and healthcare support for a child in need.
            </p>
            <ul>
              <li>Provide School Fees</li>
              <li>Study Material & Uniform</li>
              <li>Monthly Health Checkups</li>
              <li>Nutritious Daily Meals</li>
            </ul>
          </motion.div>

          <motion.div className="full-card">
            <h2>🍛 Feed a Family</h2>
            <p>Your support helps provide basic groceries to families struggling with hunger.</p>
            <ul>
              <li>Essential Food Kits</li>
              <li>Cooked Meal Distribution</li>
              <li>Community Feeding Programs</li>
            </ul>
          </motion.div>

          <motion.div className="full-card">
            <h2>🎒 Support Education</h2>
            <p>
              Many children drop education due to lack of basic study resources. You can help change this.
            </p>
            <ul>
              <li>Books & Notebooks</li>
              <li>School Bags & Stationery</li>
              <li>Tuition Support</li>
              <li>Library Access</li>
            </ul>
          </motion.div>
        </div>

        <div className="buttons-row">
          <button className="btn-gradient" onClick={() => handleButtonClick("Sponsor a Child")}>
            Sponsor Now
          </button>
          <button className="btn-gradient" onClick={() => handleButtonClick("Feed a Family")}>
            Donate Meals
          </button>
          <button className="btn-gradient" onClick={() => handleButtonClick("Support Education")}>
            Support Now
          </button>
        </div>
      </motion.section>

      {/* FIRST MODAL — THANK YOU */}
      {modalOpen && !showForm && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <h2>Thank you for helping! 💛</h2>
            <p>Your contribution makes a real difference.</p>

            <div className="modal-buttons">
              <button className="btn-gradient" onClick={handleProceed}>
                Proceed
              </button>
              <button className="btn-back" onClick={() => setModalOpen(false)}>
                Back
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SECOND MODAL — FORM */}
{/* SECOND MODAL — FORM */}
{showForm && (
  <div className="modal-backdrop">
    <div className="modal-content" style={{ maxWidth: "550px" }}>
      <InvolvedForm selectedHelp={selectedHelp} closeForm={closeForm} />
    </div>
  </div>
)}

    </>
  );
}

export default GetInvolvedFull;
