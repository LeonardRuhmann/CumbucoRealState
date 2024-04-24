import { Link } from "react-router-dom";

export type Props = {
  id: string;
  imgUrl: string;
  price: string;
  description: string;
};

export default function Card({ id, imgUrl, price, description }: Props) {
  return (
    <>
      <div className="card">
        <div className="box-card">
          <div className="box-img">
            <img src={imgUrl} alt="" />
          </div>
          <div className="box-price">
            <p>Price: R${price}</p>
          </div>
          <div className="box-description">
            <p>{description}</p>
          </div>
          <div className="box-button">
            <button>
              <Link to={`properties/${id}`}>More Info</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
