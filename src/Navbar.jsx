import React from "react";
import logo from "./assets/logo.jpg"

const navLinks = [
  { id: 1, name: "Home", href: "#" },
  { id: 2, name: "About", href: "#" },
  { id: 3, name: "Services", href: "#" },
  { id: 4, name: "Contact", href: "#" },
];


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" width={50}/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
          

            {navLinks.map((link) => (
             <li className="nav-item" key={link.id}>
                <a className="nav-link" href={link.href}>
                  {link.name}
                </a>
              </li>
            ))
            }

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;