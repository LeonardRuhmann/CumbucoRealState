import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.jsx";
import LayoutImages from "../components/subcomponents/LayoutImages.tsx";
import db from "../database/db.js";

export default function C1616() {
  return (
    <>
      <Navbar scrollActive={false} />
      <div className="main main-properties">
        <div className="properties-content">
          <div className="properties-title">
            <h1>{db.C1616.name}</h1>
          </div>
          <div className="properties-description">
            <p>{db.C1616.description}</p>
          </div>
          <div className="properties-price">
            <h1>R$ {db.C1616.price}</h1>
          </div>
          <div className="properties-images">
            {db.C1616.BackgroundIMG.map((item, index) => (
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
