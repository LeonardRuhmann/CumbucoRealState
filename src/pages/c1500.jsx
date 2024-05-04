import { useContext } from "react";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.jsx";
import LayoutImages from "../components/subcomponents/LayoutImages.tsx";
import db from "../database/db.js";
import { LanguageContext } from "../context/LanguageContext.jsx";

export default function c1500() {
  const { lang } = useContext(LanguageContext);
  return (
    <>
      <Navbar scrollActive={false} />
      <div style={{ height: "1000px" }} className="main main-properties">
        <div className="properties-content">
          <div className="properties-title">
            <h1>{db.c1500.name}</h1>
          </div>
          <div className="properties-description">
            <p>{db.c1500.description[lang]}</p>
          </div>
          <div className="properties-price">
            <h1>R$ {db.c1500.price}</h1>
          </div>
          <div className="properties-images">
            {db.c1500.BackgroundIMG.map((item, index) => (
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
