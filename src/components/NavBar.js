import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={container}>
      <Link to="/">Home Page</Link>
      <Link to="/about"> About Page</Link>
      <Link to="/contact">Contact Page</Link>
    </nav>
  );
};

const container = {
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "green",
  color: "white",
  height: "50px",
};

export default NavBar;
