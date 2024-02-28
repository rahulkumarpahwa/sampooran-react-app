import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="about">
      <h1>About this App:</h1>
      <br></br>
      <h3>
        This Plant Nusery App has been created by{" "}
        <Link to="https://linkedin.com/in/rahulkumarpahwa">Rahul Kumar</Link> as
        a part of learning Frontend development with React.js.
      </h3>
      <br></br>
      <h2>This App has following features:</h2>
      <ul>
        <li>You can search any plant name from the search bar.</li>
        <li>You can click on "Know More" to know more about the plant.</li>
        <li>
          You can see the ShimmerUI when you open the dynamic route of a plant.
        </li>
        <li>
          You can go to different routes like the About, Contact and dynamic
          routes of each plant.
        </li>
      </ul>
      <br></br>
      <h2>Technologies used:</h2>
      <ul>
        <li>React.js</li>
        <li>React Hooks</li>
        <li>React Router Dom</li>
        <li>Parcel</li>
        <li>Google App Script to make the Custom API</li>
        <li>Fetch()</li>
        <li>JavaScript</li>
        <li>JSX</li>
        <li>CSS</li>
        <li>Canva to create custom logo</li>
      </ul>
      <br></br>
      <h3>
        If you want to contact with me. Kindly click{" "}
        <Link to="/contact">Here</Link> to go to Contact page.
      </h3>
    </div>
  );
};

export default About;
