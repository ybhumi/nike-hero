import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navabr = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      {/* Logo */}
      <a className="navbar-brand" href="#">
        <img
          src="https://static.vecteezy.com/system/resources/previews/010/994/412/original/nike-logo-black-with-name-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" // Replace with the URL of your logo image
          width="70"
          height="70"
          alt="Logo"
          className="d-inline-block align-text-top"
        />
      </a>

      {/* Navigation Items */}
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Location</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>

      {/* Sign-in Button */}
      <button className="btn btn-danger my-2 my-sm-0" type="submit">
        Sign In
      </button>
    </nav>
  );
};

export default Navabr;
