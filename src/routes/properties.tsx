import { useContext } from "react";
import { CardContext } from "../contexts/CardContext";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Properties() {
  const { id } = useParams();

  const cards = useContext(CardContext);
  const card = cards.find((card) => card.id === id);

  return (
    <>
      <Navbar />
      <div className="main">
        <img src={card.imgUrl} alt="" />
        <p>{card.price}</p>
        <p>{card?.description}</p>
      </div>
      <Footer />
    </>
  );
}
