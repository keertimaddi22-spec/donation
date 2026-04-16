import "./Mission.css";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";

// Images
import EduImg from "../../assets/Missions/Education.jpeg";
import HealthImg from "../../assets/Missions/play.jpeg";
import FoodImg from "../../assets/Missions/Food.jpeg";

// Gallery
import Gallery from "../Gallery/Gallery";

function Mission() {
  const location = useLocation();
  const isFullPage = location.pathname === "/mission";

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const cardsParent = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.25
      }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="mission-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="mission-text" variants={containerVariants}>
        <h2>🌸 Our Mission</h2>
        <p>
          At LittleHearts Foundation, our mission is to bring hope, nourishment,
          and education to every child in need. We believe that no child should
          go to bed hungry, miss out on learning, or be denied the care and love
          they deserve.
        </p>
        <p>
          Through compassion and community action, we work to provide meals,
          education, and emotional support. Together, we can transform lives —
          one smile, one meal, and one heart at a time.
        </p>

        {/* Buttons only on Home page */}
        {!isFullPage && (
          <div className="mission-buttons">
            <Link to="/mission" className="view-btn">View Missions</Link>
            <Link to="/gallery" className="view-btn">View Gallery</Link>
          </div>
        )}
      </motion.div>

      {/* Mission Cards */}
      <motion.div
        className="mission-cards"
        variants={cardsParent}
        initial="hidden"
        animate="visible"
      >
        {/* Card 1 */}
        <motion.div
          className="mission-card"
          variants={cardVariant}
          whileHover={{ scale: 1.04, y: -6 }}
          transition={{ type: "spring", stiffness: 180 }}
        >
          <img src={FoodImg} alt="Food" />
          <h3>Food for Every Child</h3>
          <p>We ensure no child sleeps hungry by providing daily meals.</p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="mission-card"
          variants={cardVariant}
          whileHover={{ scale: 1.04, y: -6 }}
          transition={{ type: "spring", stiffness: 180 }}
        >
          <img src={EduImg} alt="Education" />
          <h3>Education for All</h3>
          <p>We empower young minds through quality learning support.</p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="mission-card"
          variants={cardVariant}
          whileHover={{ scale: 1.04, y: -6 }}
          transition={{ type: "spring", stiffness: 180 }}
        >
          <img src={HealthImg} alt="Healthcare" />
          <h3>Healthcare & Hygiene</h3>
          <p>We promote good hygiene habits and provide basic medical support.</p>
        </motion.div>
      </motion.div>

      {/* Gallery when full page */}
      {isFullPage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ marginTop: "60px" }}
        >
          <Gallery />
        </motion.div>
      )}
    </motion.div>
  );
}

export default Mission;
