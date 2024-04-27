import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionCard from "../components/SectionCard";
import Card from "../components/subcomponents/Card";
import "../css/index.css";
import db from "../../database/db";

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        {/* Esse id chamado properties-scroll foi colocado para quando clicado na li da navbar 
        ele possa ser scrollado para a parte de vendas */}
        <div className="section-properties" id="properties-scroll">
          <SectionCard title={"Cumbuco"} />
          <div className="section-cards">
            <Card
              page_path={`/${db.CV7500.name}`}
              imgUrl={
                "../src/assets/image/CV7500/Imagem do WhatsApp de 2023-02-02 à(s) .jpg"
              }
              price={"850.000"}
              description={
                "Beachfront 2 bedroom apartment on the ground floor in Verandas do Mar, includes a 20 m² garden. "
              }
            />
            <Card
              page_path={"/CJ1000"}
              imgUrl={
                "../src/assets/image/CJ1000/23d96d86-fa05-4926-8c8b-2617f6b34b7e.jpeg"
              }
              price={"2.500.000"}
              description={
                "Large modern style house right in the center of Cumbuco and at 50 meters from the beach with 7 double rooms with bathrooms, a spacious separate kitchen house with toilet facility, a garage, carport, a beautiful pool and a tropical garden."
              }
            />
            <Card
              page_path={"/CV4400"}
              imgUrl={"../src/assets/image/CV4400/IMG_0060.JPG"}
              price={"490.000"}
              description={
                "2 bedroom apartment of 67,90 m² on the second floor in the Sun Village Cumbuco. It is perfectly located just before the center of Cumbuco."
              }
            />
          </div>
          <div className="section-cards">
            <Card
              page_path={"/C1616"}
              imgUrl={
                "../src/assets/image/C1616/WhatsApp Image 2023-07-20 at 11.34.20.jpeg"
              }
              price={"1.600.000"}
              description={
                "Large house with 6 air-conditioned suites on a lot of 820 m2. At just 100 meters from the center of Cumbuco, perfect to turn in to a pousada."
              }
            />
            <Card
              page_path={"/C1617"}
              imgUrl={"../src/assets/image/C1617.jpg"}
              price={"400.000"}
              description={"Lot of 820 m2 behind C1616."}
            />
            <Card
              page_path={"/Cc1100"}
              imgUrl={
                "../src/assets/image/Cc1100/WhatsApp Image 2022-04-26 at 16.15.20.jpeg"
              }
              price={"1.200.000"}
              description={
                "The Beach Sun Cumbuco condominium is built on 3440 m2 of land with 86 meters beachfront. The apartment for sale has 120 m2 and is on the ground floor on the last block. The price includes all furniture. "
              }
            />
          </div>
          <div className="section-cards">
            <Card
              page_path={"/C4278"}
              imgUrl={"../src/assets/image/C4278.jpg"}
              price={"6.053.000"}
              description={
                "Beachfront land in Cumbuco, 5 lots with a total of 4278 m², beachfront is 63,46 meter. The price is 255 Euro per m²"
              }
            />
            <Card
              page_path={"/CB2030"}
              imgUrl={
                "../src/assets/image/CB2030/Penthouse and Cumbuco Beach Apartments 046.jpg"
              }
              price={"500.000"}
              description={
                "2 bedroom apartment of 67 m², top floor, in the Royal Beach condominium, right in the center of Cumbuco. "
              }
            />
            <Card
              page_path={"/CB1000"}
              imgUrl={
                "../src/assets/image/CB1000/WhatsApp Image 2024-01-15 at 11.45.08.jpeg"
              }
              price={"1.000.000"}
              description={
                "House near the center of Cumbuco on a lot of 920 m2. The house has 4 bedrooms, two upstairs and two downstairs, 7 bathrooms, kitchen, barbecue, a swimming pool. "
              }
            />
          </div>

          <SectionCard title={"Tabuba"} />
          <div className="section-cards">
            <Card
              page_path={"/TB2515"}
              imgUrl={
                "../src/assets/image/TB2515/IMG_20170607_171916 (Custom).jpg"
              }
              price={"180.000"}
              description={
                "6 furnished 4 bedroom apartments of 103 to 120 m² in the luxurious Sheyliane condominium in Tabuba."
              }
            />
            <Card
              page_path={"/TB2024"}
              imgUrl={
                "../src/assets/image/TB2024/WhatsApp Image 2024-02-27 at 13.06.03 (1).jpeg"
              }
              price={"2.000.000"}
              description={
                "Luxury beachfront house in Tabuba, completely renovated in 2023. There are 4 large suites, the master bedroom has a large jacuzzi. The lot is 1750 m2."
              }
            />
            <Card
              page_path={"/TB3151"}
              imgUrl={
                "../src/assets/image/TB3151/WhatsApp Image 2022-12-22 at 14.01.39.jpeg"
              }
              price={"220.000"}
              description={
                "Recently renovated 3 bedroom apartment of 110 m² 3 bedroms, 3 bathrooms, kitchen and a large living room in the Esplanada da Tabuba condominium. "
              }
            />
          </div>
          <SectionCard title={"Icaraí"} />
          <div className="section-cards">
            <Card
              page_path={"/IC3200"}
              imgUrl={
                "../src/assets/image/IC3200/WhatsApp Image 2022-03-03 at 13.57.04.jpeg"
              }
              price={"340.000"}
              description={
                "House with 4 bedrooms (of which 2 are suites), one common bathroom, large veranda, swimmingpool on a lot of 380 m² near the beach in Icarai. "
              }
            />
          </div>
          <SectionCard title={"Cauipe"} />
          <div className="section-cards">
            <Card
              page_path={"/c1500"}
              imgUrl={"../src/assets/image/c1500.jpg"}
              price={"1.500.000"}
              description={
                "3242 m2 of land very near the Lagoa de Cauipe. The land has a matricula."
              }
            />
          </div>
        </div>
        <div className="about-us" id="about-us-scroll">
          <div className="about-us-title">
            <h1>About us</h1>
          </div>
          <div className="about-us-content">
            <div className="about-us-img">
              <img src="../src/assets/logo/logo.jpg" alt="" />
            </div>
            <div className="about-us-text">
              <p>
                We have direct contact with many real estate owners in Cumbuco,
                Tabuba, and surrounding areas. We also work together with
                several other local real estate agents. One of us has his
                Brazilian real estate license and has been involved with real
                estate in this area for over 15 years. We can tell you what is
                involved in buying real estate in Ceara, Brazil. If you plan to
                do a project here, whether it's a house, an apartment complex,
                or a hotel, we can explain to you how things work here; the way
                things work in practice. What one needs to do before buying real
                estate here, what possible problems might arise, how to avoid
                these problems. If you have any questions about this, please
                send an email to us
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
