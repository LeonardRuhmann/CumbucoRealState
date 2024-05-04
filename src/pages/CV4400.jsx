import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.jsx";
import LayoutImages from "../components/subcomponents/LayoutImages.tsx";
import db from "../database/db.js";

export default function CV4400() {
  return (
    <>
      <Navbar scrollActive={false} />
      <div className="main main-properties">
        <div className="properties-content">
          <div className="properties-title">
            <h1>{db.CV4400.name}</h1>
          </div>
          <div className="properties-description">
            <p>{db.CV4400.description}</p>
          </div>
          <div className="properties-price">
            <h1>R$ {db.CV4400.price}</h1>
          </div>
          <div className="properties-images">
            {db.CV4400.BackgroundIMG.map((item, index) => (
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
