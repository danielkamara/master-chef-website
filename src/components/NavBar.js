import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={container}>
      <Link to="/" style={{ color: "#fff" }}>
        Home Page
      </Link>
      <Link to="/about" style={{ color: "#fff" }}>
        {" "}
        About Page
      </Link>
      <Link to="/contact" style={{ color: "#fff" }}>
        Contact Page
      </Link>
    </nav>
  );
};

const container = {
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "green",
  color: "#fff",
  height: "50px",
};

export default NavBar;
