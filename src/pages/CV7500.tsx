import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import db from "../database/db";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function CV7500() {
  return (
    <>
      <Navbar></Navbar>
      {/* Nesse código a única classe herdada é a classe main */}
      <div className="main">
        <div className="properties-content">
          <div className="properties-title">
            <h1>{db.CV7500.name}</h1>
          </div>
          {/* Area Reservada para o Carrousel */}
          <div style={{ width: "300px" }}>
            <Carousel autoPlay={true}>
              <div>
                <img src="..\src\assets\image\CV7500\Imagem do WhatsApp de 2023-02-02 à(s) .jpg" />
              </div>
              <div>
                <img src="..\src\assets\image\CV7500\Imagem do WhatsApp de 2023-02-02 à(s) .jpg" />
              </div>
              <div>
                <img src="..\src\assets\image\CV7500\Imagem do WhatsApp de 2023-02-02 à(s) .jpg" />
              </div>
            </Carousel>
          </div>

          <div className="properties-price">
            <h1>{db.CV7500.price}</h1>
          </div>
          <div className="properties-adress">
            <p>
              Av. Coqueiros Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Sunt,
            </p>
          </div>
          <div className="properties-description">
            <p>{db.CV7500.description}</p>
          </div>
        </div>
        <div className="properties-spaces">
          <div className="properties-space-content">
            <div className="space-title">Garagem</div>
            <div className="space-number">1</div>
          </div>
          <div className="properties-space-content">
            <div className="space-title">Quartos</div>
            <div className="space-number">1</div>
          </div>
          <div className="properties-space-content">
            <div className="space-title">garagem</div>
            <div className="space-number">1</div>
          </div>
          <div className="properties-space-content">
            <div className="space-title">garagem</div>
            <div className="space-number">1</div>
          </div>
          <div className="properties-space-content">
            <div className="space-title">garagem</div>
            <div className="space-number">1</div>
          </div>
        </div>
        <div className="properties-contacts">
          <div className="contact-title"></div>
          <div className="contact-content">
            <p>robert@cumbuco.nl</p>
            <p>+55 (85) 98690-8189</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
