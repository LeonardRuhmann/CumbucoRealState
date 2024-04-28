import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import db from "../database/db";

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
          <div className="properties-images">
            <div className="properties-container">
              <div
                style={{
                  backgroundImage:
                    "url(../src/assets//image/CV7500/IMG-20190320-WA0004.jpg",
                }}
                className="properties-grid"
              ></div>
              <div
                style={{
                  height: "171.8%",
                  backgroundImage:
                    "url(../src/assets/image/CV7500/quintal.jpeg",
                }}
                className="properties-grid"
              ></div>
              <div
                style={{
                  backgroundImage:
                    "url(../src/assets//image/CV7500/sala-de-estar.jpeg",
                }}
                className="properties-grid"
              >
                {/* <img src="../src/assets/image/CV7500/1a.jpg" alt="" /> */}
              </div>
            </div>
            <div className="properties-container">
              <div
                style={{
                  backgroundImage:
                    "url(../src/assets//image/CV7500/IMG-20190320-WA0004.jpg",
                }}
                className="properties-grid"
              ></div>
              <div
                style={{
                  height: "171.8%",
                  backgroundImage:
                    "url(../src/assets/image/CV7500/quintal.jpeg",
                }}
                className="properties-grid"
              ></div>
              <div
                style={{
                  backgroundImage:
                    "url(../src/assets//image/CV7500/sala-de-estar.jpeg",
                }}
                className="properties-grid"
              >
                {/* <img src="../src/assets/image/CV7500/1a.jpg" alt="" /> */}
              </div>
            </div>
          </div>

          <div className="properties-images">
            <div className="properties-container">
              <div
                style={{
                  backgroundImage:
                    "url(../src/assets//image/CV7500/IMG-20190320-WA0004.jpg",
                }}
                className="properties-grid"
              ></div>
              <div
                style={{
                  height: "171.8%",
                  backgroundImage:
                    "url(../src/assets/image/CV7500/quintal.jpeg",
                }}
                className="properties-grid"
              ></div>
              <div
                style={{
                  backgroundImage:
                    "url(../src/assets//image/CV7500/sala-de-estar.jpeg",
                }}
                className="properties-grid"
              >
                {/* <img src="../src/assets/image/CV7500/1a.jpg" alt="" /> */}
              </div>
            </div>
            <div className="properties-container">
              <div
                style={{
                  backgroundImage:
                    "url(../src/assets//image/CV7500/IMG-20190320-WA0004.jpg",
                }}
                className="properties-grid"
              ></div>
              <div
                style={{
                  height: "171.8%",
                  backgroundImage:
                    "url(../src/assets//image/CV7500/quintal.jpeg",
                }}
                className="properties-grid"
              ></div>
              <div
                style={{
                  backgroundImage:
                    "url(../src/assets//image/CV7500/sala-de-estar.jpeg",
                }}
                className="properties-grid"
              >
                {/* <img src="../src/assets/image/CV7500/1a.jpg" alt="" /> */}
              </div>
            </div>
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
