import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Footer() {
  const { lang } = useContext(LanguageContext);
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
              <img src="/icons/email-icon.png" alt="" />
              robert@cumbuco.nl
            </a>
            <a target="_blank" href="https://wa.me/5585986908189">
              <img src="/icons/phone-icon.png" alt="" />
              (85) 98690-8189
            </a>
          </div>
          <div className="footer-informations-links">
            <a href="">{lang === "pt" ? "Termos de uso" : "Terms of use"}</a>
            <a href="#">
              {lang === "pt" ? "Políticas de Privacidade" : "Privacy Policy"}
            </a>
          </div>
        </div>
        <div className="footer-end">
          <p>
            {" "}
            © 2024 Cumbuco Real State -{" "}
            {lang === "pt"
              ? "Todos os direitos reservados"
              : "All rights reserved"}
          </p>
        </div>
      </div>
    </>
  );
}
