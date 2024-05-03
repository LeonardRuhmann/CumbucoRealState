import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import LayoutImages from "../components/subcomponents/LayoutImages.tsx";
import db from "../database/db.js";

export default function IC3200() {
  return (
    <>
      <Navbar scrollActive={false} />
      <div style={{ height: "2000px" }} className="main main-properties">
        <div className="properties-content">
          <div className="properties-title">
            <h1>{db.IC3200.name}</h1>
          </div>
          <div className="properties-description">
            <p>{db.IC3200.description}</p>
          </div>
          <div className="properties-price">
            <h1>R$ {db.IC3200.price}</h1>
          </div>
          <div className="properties-images">
            {db.IC3200.BackgroundIMG.map((item, index) => (
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
