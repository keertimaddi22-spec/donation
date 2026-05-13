import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar.tsx";
import Hero from "./Pages/Hero/Hero.tsx";
import Mission from "./Pages/Mission/Mission.tsx";
import Impact from "./components/Impact/Impact.tsx";
import Footer from "./components/Footer/Footer.tsx";
import GetInvolved from "./Pages/GetInvolved/GetInvolved.tsx";
import Donate from "./Pages/Donate/Donate.tsx";
import Gallery from "./Pages/Gallery/Gallery.tsx";
import GetInvolvedFull from "./Pages/GetInvolvedFull/GetInvolvedFull.tsx";
import News from "./Pages/News/News.tsx";
import NewsDetails from "./Pages/News/NewsDetails.tsx";
import Contact from "./Pages/Contact/Contact.tsx";
import ScrollToTop from "./ScrollToTop.jsx";

// 👉 NEW IMPORT
import Register from "./Pages/Register/Register.tsx";
import Login from "./Pages/Login/Login.tsx";

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
        <Route path="/register" element={<Register />} />
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
