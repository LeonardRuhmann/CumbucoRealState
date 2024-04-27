import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <a href="/">
            <img src="../src/assets/logo/logo.jpg" alt="" />
          </a>
        </div>
        <div className="title-page">
          <p>Cumbuco </p>
          <p className="p2"> Real State</p>
        </div>
        <div className="nav-buttons">
          <ul className="ul-navbar">
            <li>
              <Link
                activeClass="active"
                to="properties-scroll"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                Properties
              </Link>
            </li>
            <li>
              {" "}
              <Link
                activeClass="active"
                to="about-us-scroll"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                About us
              </Link>
            </li>
            <li
              style={{ display: "flex", alignItems: "center" }}
              onClick={toggleDropdown}
            >
              Contacts{" "}
              <img
                style={{
                  width: "15%",
                  paddingInlineStart: "5%",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease-in-out",
                }}
                src="../src/assets/icons/seta-baixo.png"
                alt=""
              />
            </li>
            {isOpen && (
              <ul className="dropdown-menu">
                <li className="dropdown-items">
                  {" "}
                  <a href="#">robert@cumbuco.nl</a>
                </li>
                <li className="dropdown-items">
                  {" "}
                  <a href="#">(85) 98690-8189</a>
                </li>
              </ul>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
