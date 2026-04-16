import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./News.css";

const newsItems = [
  {
    title: "Health Camp in City Center",
    date: "Nov 5, 2025",
    description: "Organized a free health checkup for 200 children and families.",
  },
  {
    title: "Successful Fundraiser",
    date: "Oct 20, 2025",
    description: "Raised ₹1,50,000 for our education drive for underprivileged kids.",
  },
  {
    title: "Volunteer Spotlight: Snehaa",
    date: "Oct 15, 2025",
    description: "Recognizing Snehaa for 50 hours of volunteering in community programs.",
  },
  {
    title: "New School Supplies Campaign",
    date: "Nov 1, 2025",
    description: "Launching a drive to provide school kits to 300 children.",
  },
  {
    title: "Winter Clothes Donation Drive",
    date: "Nov 10, 2025",
    description: "Collecting warm clothes for 400 children across the city.",
  },
  {
    title: "Tree Plantation Event",
    date: "Nov 12, 2025",
    description: "Planted 200 trees with our amazing volunteers in GreenPark area.",
  },
];

function News() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="news-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="news-title">Latest News & Updates</h2>
      <p className="news-subtitle">
        Stay inspired by our activities, success stories, and campaigns.
      </p>

      <div className="news-grid">
        {newsItems.map((item, index) => (
          <motion.div
            key={index}
            className="news-card"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="news-content">
              <div className="news-date">{item.date}</div>
              <h3 className="news-item-title">{item.title}</h3>
              <p className="news-description">{item.description}</p>
              <button
                className="read-more"
                onClick={() => navigate(`/news-details#${item.title.replace(/\s+/g, '-')}`)}
              >
                Read More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default News;
