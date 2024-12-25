/* eslint-disable no-unused-vars */
import "./App.css";
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
} from "react-router-dom";
import Signin from "./components/Pages/Signin";
import Signup from "./components/Pages/Signup";
import ContactUs from "./components/Pages/ContactUs";
import About from "./components/Pages/About";
import SubmitManuscript from "./components/Pages/SubmitManuscript/SubmitManuscript";
import EditorialBoard from "./components/Pages/EditorialBoard";
import NewsComponent from "./components/Pages/News";

function App() {
  return (
    <Router>
      <AppWithHeader />
    </Router>
  );
}
function AppWithHeader() {
  const location = useLocation();
  const isExcludedRoute = location.pathname === "/author"; // Add more paths if needed
  const isHome = location.pathname === "/";

  return (
    <>
      {!isExcludedRoute && <Header show={isHome} />}
      <Routes>
        {/* Index */}
        <Route path="/" element={<Home />} />
        {/* Pages */}
        <Route path="/journal" element={<Journal />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/editorial-board" element={<EditorialBoard />} />
        <Route path="/author" element={<SubmitManuscript />} />
        <Route path="/news" element={<NewsComponent />} />
      </Routes>
      {!isExcludedRoute && <Footer />}
    </>
  );
}
export default App;
