import { createContext, useState } from "react";

interface Card {
  id: string;
  imgUrl: string;
  price: string;
  description: string;
}

export const CardContext = createContext<Card[]>([
  {
    id: "CV7500",
    imgUrl:
      "../src/assets/image/CV7500/Imagem do WhatsApp de 2023-02-02 à(s) .jpg",
    price: "850.000",
    description:
      "Beachfront 2 bedroom apartment on the ground floor in Verandas do Mar, includes a 20 m² garden.",
  },
  {
    id: "CJ1000",
    imgUrl:
      "../src/assets/image/CJ1000/23d96d86-fa05-4926-8c8b-2617f6b34b7e.jpeg",

    price: "2.500.000",
    description:
      "Large modern style house right in the center of Cumbuco and at 50 meters from the beach with 7 double rooms with bathrooms, a spacious separate kitchen house with toilet facility, a garage, carport, a beautiful pool and a tropical garden.",
  },
]);

function CardProvider({ children }: { children: React.ReactNode }) {
  const [cards, setCards] = useState<Card[]>([]);

  return <CardContext.Provider value={cards}>{children}</CardContext.Provider>;
}
export default CardProvider;
