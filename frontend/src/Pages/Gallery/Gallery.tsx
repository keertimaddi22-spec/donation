import { motion } from "framer-motion";
import "./Gallery.css";
import { Link } from "react-router-dom";

import img1 from "../../assets/Gallery/Img1.jpeg";
import img2 from "../../assets/Gallery/Img2.jpeg";
import img3 from "../../assets/Gallery/Img3.jpeg";
import img4 from "../../assets/Gallery/Img4.jpeg";
import img5 from "../../assets/Gallery/Img5.jpeg";
import img6 from "../../assets/Gallery/Img6.jpeg";
import img7 from "../../assets/Gallery/Img7.jpeg";
import img8 from "../../assets/Gallery/Img8.jpeg";

function Gallery() {
  const images = [img1, img2, img3, img4 , img5 , img6 ,img7 , img8];

  return (
    <motion.div
      className="gallery-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h2 className="gallery-title">
🌻Smiles That Inspire Us</h2>

      <div className="gallery-grid">
        {images.map((src, i) => (
          <motion.div
            className="gallery-item"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <img src={src} alt={`Gallery ${i + 1}`} />
          </motion.div>
        ))}
      </div>

      <Link to="/" className="backs-btn">
        ← Back Home
      </Link>
    </motion.div>
  );
}

export default Gallery;
