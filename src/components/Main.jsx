import { LanguageContext } from "../context/LanguageContext.jsx";
import { useState, useContext } from "react";
import SectionCard from "./SectionCard.tsx";
import Card from "./subcomponents/Card.tsx";
import "../css/index.css";
import db from "../database/db.js";

export default function MainContent() {
  const { lang } = useContext(LanguageContext);

  return (
    <>
      <div className="main">
        {/* Esse id chamado properties-scroll foi colocado para quando clicado na li da navbar 
        ele possa ser scrollado para a parte de vendas */}
        <div className="section-properties" id="properties-scroll">
          <SectionCard title={"Cumbuco"} />
          <div className="section-cards">
            <Card
              page_path={`/${db.CV7500.id}`}
              imgUrl={db.CV7500.imgUrl}
              price={db.CV7500.price}
              description={db.CV7500.description[lang]}
            />
            <Card
              page_path={`/${db.CJ1000.id}`}
              imgUrl={db.CJ1000.imgUrl}
              price={db.CJ1000.price}
              description={db.CJ1000.description[lang]}
            />
            <Card
              page_path={`/${db.CV4400.id}`}
              imgUrl={db.CV4400.imgUrl}
              price={db.CV4400.price}
              description={db.CV4400.description}
            />
          </div>
          <div className="section-cards">
            <Card
              page_path={`/${db.C1616.id}`}
              imgUrl={db.C1616.imgUrl}
              price={db.C1616.price}
              description={db.C1616.description}
            />
            <Card
              page_path={`/${db.C1617.id}`}
              imgUrl={db.C1617.imgUrl}
              price={db.C1617.price}
              description={db.C1617.description}
            />
            <Card
              page_path={`/${db.Cc1100.id}`}
              imgUrl={db.Cc1100.imgUrl}
              price={db.Cc1100.price}
              description={db.Cc1100.description}
            />
          </div>
          <div className="section-cards">
            <Card
              page_path={`/${db.C4278.id}`}
              imgUrl={db.C4278.imgUrl}
              price={db.C4278.price}
              description={db.C4278.description}
            />
            <Card
              page_path={`/${db.CB2030.id}`}
              imgUrl={db.CB2030.imgUrl}
              price={db.Cc1100.price}
              description={db.Cc1100.description}
            />
            <Card
              page_path={`/${db.CB1000.id}`}
              imgUrl={db.CB1000.imgUrl}
              price={db.CB1000.price}
              description={db.CB1000.description}
            />
          </div>

          <SectionCard title={"Tabuba"} />
          <div className="section-cards">
            <Card
              page_path={`/${db.TB2515.id}`}
              imgUrl={db.TB2515.imgUrl}
              price={db.TB2515.price}
              description={db.TB2515.description}
            />
            <Card
              page_path={`/${db.TB2024.id}`}
              imgUrl={db.TB2024.imgUrl}
              price={db.TB2024.price}
              description={db.TB2024.description}
            />
            <Card
              page_path={`/${db.TB3151.id}`}
              imgUrl={db.TB3151.imgUrl}
              price={db.TB3151.price}
              description={db.TB3151.description}
            />
          </div>
          <SectionCard title={"Icaraí"} />
          <div className="section-cards">
            <Card
              page_path={`/${db.IC3200.id}`}
              imgUrl={db.IC3200.imgUrl}
              price={db.IC3200.price}
              description={db.IC3200.description}
            />
          </div>
          <SectionCard title={"Cauipe"} />
          <div className="section-cards">
            <Card
              page_path={`/${db.c1500.id}`}
              imgUrl={db.c1500.imgUrl}
              price={db.c1500.price}
              description={db.c1500.description}
            />
          </div>
        </div>
        <div className="about-us" id="about-us-scroll">
          <div className="about-us-title">
            <h1>About us</h1>
          </div>
          <div className="about-us-content">
            <div className="about-us-img">
              <img src="/logo/logo.jpg" alt="" />
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
    </>
  );
}
