import logo from "../logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <div className="logo">
          <Link>
            {" "}
            <img src={logo} />
          </Link>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
