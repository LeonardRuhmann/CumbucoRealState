import { Link } from "react-scroll";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-title">
          <p className="p1">Cumbuco </p>
          <p className="p2"> Real State</p>
        </div>
        <div className="footer-informations">
          {" "}
          <div className="footer-informations-contacts">
            <a href="mailto:roberto@cumbuco.nl?subject=Hi. I want talk with about the properties&body=I want to know a little more about the properties">
              <img src="../src/assets/icons/email-icon.png" alt="" />
              robert@cumbuco.nl
            </a>
            <a target="_blank" href="https://wa.me/5585986908189">
              <img src="../src/assets/icons/phone-icon.png" alt="" />
              (85) 98690-8189
            </a>
          </div>
          <div className="footer-informations-links">
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
            <a href="">Terms of use</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div className="footer-end">
          <p> © 2024 Cumbuco Real State - Todos os Direitos Reservados</p>
        </div>
      </div>
    </>
  );
}
