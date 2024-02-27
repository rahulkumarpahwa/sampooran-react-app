import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h2 className="footer-logo"> Sampooran &nbsp; Nusery</h2>
      <hr />
      <div className="footer-container">
        <div className="sub-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="socials">
          <Link to="https://twitter.com/rahulkumarpahwa">
            <i className="fa-brands fa-square-x-twitter"></i>
          </Link>
          <Link to="https://linkedin.com/in/rahulkumarpahwa">
            <i className="fa-brands fa-linkedin"></i>
          </Link>
          <Link to="https://github.com/rahulkumarpahwa">
            <i className="fa-brands fa-square-github"></i>
          </Link>
        </div>
        <div className="copyright">
          <p>Terms & Conditions &nbsp; &nbsp; Privacy Policy </p>
          <p>
            Copyright &copy; 2024-2025 Sampooran Nusery, Ltd. &nbsp; All rights
            reserved.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
