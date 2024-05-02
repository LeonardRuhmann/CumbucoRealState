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
          <div className="properties-description">
            <p>{db.C4278.description}</p>
          </div>
        </div>
        <div className="properties-spaces">
          <div className="properties-space-content">
            <div className="space-item-title">Garagem</div>
            <div className="space-item-number">1</div>
          </div>
          <div className="properties-space-content">
            <div className="space-item-title">Quartos</div>
            <div className="space-item-number">3</div>
          </div>
          <div className="properties-space-content">
            <div className="space-item-title">Banheiros</div>
            <div className="space-item-number">3</div>
          </div>
          <div className="properties-space-content">
            <div className="space-item-title">Cozinha</div>
            <div className="space-item-number">1</div>
          </div>
          <div className="properties-space-content">
            <div className="space-item-title">Sala</div>
            <div className="space-item-number">2</div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
