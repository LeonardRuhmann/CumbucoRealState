import { useState } from "react";
import { Link } from "react-scroll";

type Props = {
  scrollActive: boolean;
};

export default function Navbar({ scrollActive }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <a href="/">
            <img src="/logo/logo.jpg" alt="" />
          </a>
        </div>
        <div className="title-page">
          <p>Cumbuco </p>
          <p className="p2"> Real State</p>
        </div>
        <div className="nav-buttons">
          <ul className="ul-navbar">
            <li>
              {scrollActive ? (
                <Link
                  to="properties-scroll"
                  smooth={true}
                  offset={-70}
                  duration={700}
                >
                  Properties
                </Link>
              ) : (
                <a href="/">Properties</a>
              )}
            </li>
            <li>
              {scrollActive ? (
                <Link
                  to="about-us-scroll"
                  smooth={true}
                  offset={-90}
                  duration={700}
                >
                  About us
                </Link>
              ) : (
                <a href="/">About Us</a>
              )}
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
                  <a href="mailto:roberto@cumbuco.nl?subject=Hi. I want talk with about the properties&body=I want to know a little more about the properties">
                    robert@cumbuco.nl
                  </a>
                </li>
                <li className="dropdown-items">
                  <a target="_blank" href="https://wa.me/5585986908189">
                    (85) 98690-8189
                  </a>
                </li>
              </ul>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
