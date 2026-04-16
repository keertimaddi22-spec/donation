import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Pages/Hero/Hero";
import Mission from "./Pages/Mission/Mission";
import Impact from "./Components/Impact/Impact";
import Footer from "./Components/Footer/Footer";
import GetInvolved from "./Pages/GetInvolved/GetInvolved";
import Donate from "./Pages/Donate/Donate";
import Gallery from "./Pages/Gallery/Gallery";
import GetInvolvedFull from "./Pages/GetInvolvedFull/GetInvolvedFull";
import News from "./Pages/News/News";
import NewsDetails from "./Pages/News/NewsDetails";
import Contact from "./Pages/Contact/Contact";
import ScrollToTop from "./ScrollToTop";

// 👉 NEW IMPORT
import Login from "./Pages/Login/Login";

// 🔐 Protected Route
function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("token");

  return isLoggedIn ? children : <Navigate to="/login" />;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Mission />
              <Impact />
              <GetInvolved />
            </>
          }
        />

        <Route path="/mission" element={<Mission />} />
        <Route path="/getinvolved" element={<GetInvolvedFull />} />

        {/* 🔐 Protected Donate */}
        <Route
          path="/donate"
          element={
            <ProtectedRoute>
              <Donate />
            </ProtectedRoute>
          }
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/news-details" element={<NewsDetails />} />

        {/* 🔥 LOGIN ROUTE */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
