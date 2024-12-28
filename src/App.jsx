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
  Link,
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

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null); // Initially null to handle loading state
  const location = useLocation();
  console.log("Auth", isAuth);
  useEffect(() => {
    const checkAuth = async () => {
      const authStatus = await isAuthenticated(); // Check if the user is authenticated
      setIsAuth(authStatus); // Update state based on the result
    };

    checkAuth();
  }, []);

  // While authentication status is being determined, render nothing or a loader
  if (isAuth === null) {
    return <div>Loading...</div>; // Replace with a loading spinner if needed
  }

  // If not authenticated, redirect to login
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // If authenticated, render children or the Outlet for nested routes
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
  const isExcludedRoute = location.pathname === "/author";
  const isHome = location.pathname === "/";

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

        {/* Protected Routes (Wrapped with ProtectedRoute) */}
        <Route element={<ProtectedRoute />}>
          <Route path="/journal" element={<Journal />} />
          <Route path="/editorial-board" element={<EditorialBoard />} />
          <Route path="/author" element={<SubmitManuscript />} />
          <Route path="/news" element={<NewsComponent />} />
        </Route>
      </Routes>
      {!isExcludedRoute && <Footer />}
    </>
  );
}

export default App;
