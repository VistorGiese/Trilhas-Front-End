import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <Link to="/" style={{ margin: "0 5px" }}>
        Home
      </Link>
      <Link to="/about" style={{ margin: "0 5px" }}>
        About
      </Link>
      <Link to="/contact" style={{ margin: "0 5px" }}>
        Contact
      </Link>
      <Link to="/rooms" style={{ margin: "0 5px" }}>
        Rooms
      </Link>
      <Link to="/animal/Dog" style={{ margin: "0 5px" }}>
        Animal
      </Link>
    </nav>
  );
}
