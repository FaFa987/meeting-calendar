import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
  Link,
} from "react-router";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

const RouterDemo = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Home Page</h1>

      <div className="btn-group">
        <button className="btn btn-outline-danger" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <button className="btn btn-outline-success" onClick={() => navigate(1)}>
          Go Forward
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => navigate("/about")}
        >
          Go to About Us
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="container">
      <h1>About Us</h1>
      <p>
        Welcome to the About Page! This is where you can learn more about us.
      </p>
      <Link to="../home" className="btn btn-outline-info">
        Back To Home
      </Link>
    </div>
  );
};

const NotFound = () => {
  return <h1 className="container">Page Not Found</h1>;
};

export default RouterDemo;