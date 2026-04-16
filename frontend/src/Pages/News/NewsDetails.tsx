import { motion } from "framer-motion";
import "./NewsDetails.css";

function NewsDetails() {
  return (
    <motion.div
      className="news-details-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="details-title">Our Latest News & Highlights</h2>
      <p className="details-subtitle">
        Get deeper insights into each of our amazing initiatives.
      </p>

      {/* SECTION 1 */}
      <section id="section1" className="details-section">
        <h3>Health Camp in City Center</h3>
        <p>
          On November 5, 2025, we organized a free health checkup camp for over
          200 children and their families. The event included dental, eye, and
          general health checkups conducted by volunteer doctors and nurses.
        </p>
      </section>

      {/* SECTION 2 */}
      <section id="section2" className="details-section">
        <h3>Successful Fundraiser</h3>
        <p>
          Our October fundraiser was a massive success — we raised ₹1,50,000 to
          support our education drive. These funds are being used to provide
          study materials and classroom upgrades in rural schools.
        </p>
      </section>

      {/* SECTION 3 */}
      <section id="section3" className="details-section">
        <h3>Volunteer Spotlight: Snehaa</h3>
        <p>
          A big shoutout to Snehaa for contributing 50+ hours of dedicated
          service! From mentoring students to organizing drives, her commitment
          inspires us all.
        </p>
      </section>

      {/* SECTION 4 */}
      <section id="section4" className="details-section">
        <h3>New School Supplies Campaign</h3>
        <p>
          We launched a campaign to provide school kits to 300 children across
          rural areas. Each kit includes notebooks, pencils, and a backpack —
          making learning a little easier and a lot brighter.
        </p>
      </section>

      {/* 🌸 BACK BUTTON */}
      <div className="back-button-container">
        <button
          onClick={() => window.history.back()}
          className="back-button"
        >
           Back to News
        </button>
      </div>
    </motion.div>
  );
}

export default NewsDetails;
