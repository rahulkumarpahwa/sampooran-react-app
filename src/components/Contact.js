import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact">
      <h4>
        Hi! My name is Rahul Kumar. This Plant Nursery Web App has been created
        by me.
      </h4>
      <h4>You Can find me at: </h4>{" "}
      <Link to="https://linkedin.com/in/rahulkumarpahwa">
        <i className="fa-brands fa-linkedin"></i> &nbsp; Linkedin -
        @rahulkumarpahwa
      </Link>{" "}
      <Link to="https://github.com/rahulkumarpahwa">
        <i className="fa-brands fa-square-github"></i> &nbsp; Github -
        @rahulkumarpahwa
      </Link>{" "}
      <Link to="https://twitter.com/rahulkumarpahwa">
        <i className="fa-brands fa-square-x-twitter"></i> &nbsp; X -
        @rahulkumarpahwa
      </Link>
      <h4>
        If you haven't read About. click{" "}
        <Link style={{ textDecoration: "underline" }} to="/about">
          Here
        </Link>
      </h4>
    </div>
  );
};

export default Contact;
