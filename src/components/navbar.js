import React, { useState } from 'react';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

function Navbar() {

  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleHandle = () => {
    setNavbarOpen(!navbarOpen);
  }

  const closeMenu = () => {
    setNavbarOpen(false);
  }

  return (
    <nav className="navBar">
      <button onClick={toggleHandle}>{navbarOpen ? (
        <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
      ) : (
        <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
      )}</button>
      <ul className={`menuNav ${navbarOpen ? " showMenu": ""}`}>
        <a className="page-link"
        href={"/"}
        activeClassName="active-link"
        onClick={() => closeMenu()}
        exact
        >Home
        </a>
        <a className="page-link"
        href={"/pricing"}
        activeClassName="active-link"
        onClick={() => closeMenu()}
        exact
        >Pricing
        </a>
      </ul>
    </nav>
  )
}

export default Navbar;