import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./GetInvolved.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import FormModal from "./FormModal";



function GetInvolved() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-out-cubic" });
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedHelp, setSelectedHelp] = useState("");

  const handleButtonClick = (type: string) => {
    setSelectedHelp(type);
    setModalOpen(true);
  };

  const handleProceed = () => setShowForm(true);
  const closeForm = () => {
    setShowForm(false);
    setModalOpen(false);
  };

  const cards = [
    {
      title: "💛 Sponsor a Child",
      desc: "Give a child access to education, meals, and healthcare — a small step that changes lives.",
      btn: "Sponsor Now",
      type: "Sponsor a Child",
    },
    {
      title: "🍛 Feed a Family",
      desc: "Your support helps us provide nutritious meals to families struggling with hunger.",
      btn: "Donate Meals",
      type: "Feed a Family",
    },
    {
      title: "🎒 Support Education",
      desc: "Help us bring learning resources and hope to underprivileged children.",
      btn: "Support Now",
      type: "Support Education",
    },
  ];

  return (
    <>
      <section className="getinvolved" id="get-involved">
        <h2 data-aos="fade-up">How You Can Help</h2>
        <p data-aos="fade-up" data-aos-delay="150">
          There are many ways to make a difference — your time, kindness, and support create change.
        </p>

        {/* --- Cards Section --- */}
        <div className="involve-cards">
          {cards.map((card, index) => (
            <div
              key={index}
              className="involve-card"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <h3>{card.title}</h3>
              <p>{card.desc}</p>

              {/* 🔥 SAME BUTTON → SAME PROCESS */}
              <button onClick={() => handleButtonClick(card.type)}>
                {card.btn}
              </button>
            </div>
          ))}
        </div>
      </section>

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
      {showForm && (
        <div className="modal-backdrop">
          <div className="modal-content" style={{ maxWidth: "550px" }}>
<FormModal selectedHelp={selectedHelp} closeForm={closeForm} />
          </div>
        </div>
      )}
    </>
  );
}

export default GetInvolved;
