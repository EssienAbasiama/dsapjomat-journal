import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Journal from "./components/Pages/Journal";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import Signin from "./components/Pages/Signin";
import Signup from "./components/Pages/Signup";
import ContactUs from "./components/Pages/ContactUs";
import About from "./components/Pages/About";
import SubmitManuscript from "./components/Pages/SubmitManuscript/SubmitManuscript";
import EditorialBoard from "./components/Pages/EditorialBoard";
import NewsComponent from "./components/Pages/News";
import { isAuthenticated } from "./utility/authUtils";
import MobileMessage from "./components/Pages/Error/MobileMessage";

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      const authStatus = await isAuthenticated();
      setIsAuth(authStatus);
    };

    checkAuth();
  }, []);

  if (isAuth === null) {
    return <div>Loading...</div>;
  }

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children ? children : <Outlet />;
};

function App() {
  return (
    <Router>
      <AppWithHeader />
    </Router>
  );
}

function AppWithHeader() {
  const location = useLocation();
  const isExcludedRoute = location.pathname === "/dashboard";

  const isHome = location.pathname === "/";
  const [isMobile, setIsMobile] = useState(false);
  // Define public routes
  const publicRoutes = ["/", "/login", "/register", "/contact-us", "/about-us"];
  const isPublicRoute = publicRoutes.includes(location.pathname);

  // Check if the device is mobile based on screen width
  useEffect(() => {
    const checkDeviceWidth = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Call the function on load and resize
    checkDeviceWidth();
    window.addEventListener("resize", checkDeviceWidth);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", checkDeviceWidth);
  }, []);

  if (isMobile && !isPublicRoute) {
    return <MobileMessage />;
  }

  return (
    <>
      {!isExcludedRoute && <Header show={isHome} />}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<About />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/journal" element={<Journal />} />
          <Route path="/editorial-board" element={<EditorialBoard />} />
          <Route path="/dashboard" element={<SubmitManuscript />} />
          <Route path="/news" element={<NewsComponent />} />
        </Route>

        {/* Redirect to mobile message page */}
        <Route path="/mobile-message" element={<MobileMessage />} />
      </Routes>
      {!isExcludedRoute && <Footer />}
    </>
  );
}

export default App;
