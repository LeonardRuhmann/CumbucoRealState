import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";

export type Props = {
  page_path: string;
  imgUrl: string;
  price: string;
  description: string;
};

export default function Card({ page_path, imgUrl, price, description }: Props) {
  const { lang } = useContext(LanguageContext);
  return (
    <>
      <div className="card">
        <div className="box-card">
          <div className="box-img">
            <img src={imgUrl} alt="" />
          </div>
          <div className="box-price">
            {lang === "pt" ? <p>Preço: R${price}</p> : <p>Price: R${price}</p>}
          </div>
          <div className="box-description">
            <p>{description}</p>
          </div>
          <div className="box-button">
            <button>
              <Link
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                to={page_path}
              >
                {lang === "pt" ? "Saber Mais" : "More Info"}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
