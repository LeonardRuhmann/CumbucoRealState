import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.jsx";
import LayoutImages from "../components/subcomponents/LayoutImages.tsx";
import db from "../database/db.js";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
export default function Cc1100() {
  const { lang } = useContext(LanguageContext);

  return (
    <>
      <Navbar scrollActive={false} />
      <div className="main main-properties">
        <div className="properties-content">
          <div className="properties-title">
            <h1>{db.Cc1100.name}</h1>
          </div>
          <div className="properties-description">
            <p>{db.Cc1100.description[lang]}</p>
          </div>
          <div className="properties-price">
            <h1>R$ {db.Cc1100.price}</h1>
          </div>
          <div className="properties-images">
            {db.Cc1100.BackgroundIMG.map((item, index) => (
              <LayoutImages
                key={index}
                img1={item.topleft}
                img2={item.rightcolumn}
                img3={item.downleft}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
