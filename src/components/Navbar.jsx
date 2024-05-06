import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { Link } from "react-scroll";
import { MenuContext } from "../context/MenuContext.jsx";

export default function NavbarContent({ scrollActive }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const { changeLanguage, lang } = useContext(LanguageContext);
  const { menuIsOpen, setMenuIsOpen } = useContext(MenuContext);
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
          <div className="nav-lang-button">
            <button onClick={() => changeLanguage("pt")}>
              <img src="/icons/brasil-24.png" alt="" />
            </button>
            <button onClick={() => changeLanguage("en")}>
              <img src="/icons/reino-unido-24.png" alt="" />
            </button>
          </div>
          <div className="menu-hamburguer">
            <button
              style={{
                transform: menuIsOpen ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease-in-out",
              }}
              onClick={() => {
                setMenuIsOpen(!menuIsOpen);
              }}
            >
              <img src="/icons/menu-hamburguer50.png" alt="" />
            </button>
          </div>
          <ul className={`ul-navbar ${menuIsOpen ? "menu-active" : ""}`}>
            <li>
              {scrollActive ? (
                <Link
                  to="properties-scroll"
                  smooth={true}
                  offset={-70}
                  duration={700}
                >
                  {lang === "pt" ? "Propriedades" : "Properties"}
                </Link>
              ) : (
                <a href="/">{lang === "pt" ? "Propriedades" : "Properties"}</a>
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
                  {lang === "pt" ? "Sobre nós" : "About us"}
                </Link>
              ) : (
                <a href="/"> {lang === "pt" ? "Sobre nós" : "About us"}</a>
              )}
            </li>
            <li
              style={{ display: "flex", alignItems: "center" }}
              onClick={toggleDropdown}
            >
              {lang === "pt" ? "Contatos" : "Contacts"}

              <img
                style={{
                  width: "15%",
                  paddingInlineStart: "5%",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease-in-out",
                }}
                src="/icons/seta-baixo.png"
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
