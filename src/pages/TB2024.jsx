import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.jsx";
import LayoutImages from "../components/subcomponents/LayoutImages.tsx";
import db from "../database/db.js";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
export default function TB2024() {
  const { lang } = useContext(LanguageContext);

  return (
    <>
      <Navbar scrollActive={false} />
      <div style={{ height: "2700px" }} className="main main-properties">
        <div className="properties-content">
          <div className="properties-title">
            <h1>{db.TB2024.name}</h1>
          </div>
          <div className="properties-description">
            <p>{db.TB2024.description[lang]}</p>
          </div>
          <div className="properties-price">
            <h1>R$ {db.TB2024.price}</h1>
          </div>
          <div className="properties-images">
            {db.TB2024.BackgroundIMG.map((item, index) => (
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
