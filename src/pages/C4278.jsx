import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import LayoutImages from "../components/subcomponents/LayoutImages.tsx";
import db from "../database/db.js";

export default function C4278() {
  return (
    <>
      <Navbar scrollActive={false} />
      <div className="main main-properties">
        <div className="properties-content">
          <div className="properties-title">
            <h1>{db.C4278.name}</h1>
          </div>
          <div className="properties-description">
            <p>{db.C4278.description}</p>
          </div>
          <div className="properties-images">
            {db.C4278.BackgroundIMG.map((item, index) => (
              <LayoutImages
                key={index}
                img1={item.topleft}
                img2={item.rightcolumn}
                img3={item.downleft}
              />
            ))}
          </div>
          <div className="properties-price">
            <h1>R$ {db.C4278.price}</h1>
          </div>
          <div className="properties-adress">
            <p>{db.C4278.adress}</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
