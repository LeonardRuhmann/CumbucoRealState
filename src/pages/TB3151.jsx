import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import LayoutImages from "../components/subcomponents/LayoutImages.tsx";
import db from "../database/db.js";

export default function TB3151() {
  return (
    <>
      <Navbar scrollActive={false} />
      <div className="main main-properties">
        <div className="properties-content">
          <div className="properties-title">
            <h1>{db.TB3151.name}</h1>
          </div>
          <div className="properties-description">
            <p>{db.TB3151.description}</p>
          </div>
          <div className="properties-images">
            {db.TB3151.BackgroundIMG.map((item, index) => (
              <LayoutImages
                key={index}
                img1={item.topleft}
                img2={item.rightcolumn}
                img3={item.downleft}
              />
            ))}
          </div>
          <div className="properties-price">
            <h1>R$ {db.TB3151.price}</h1>
          </div>
          <div className="properties-adress">
            <p>{db.TB3151.adress}</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
