import BuldursGateImg from "./BuldursGateImg.webp";

import "./gameCard.css";

export const GameCard = ({ title, image, percentage, retail, price }) => {
  return (
    <li className="card-c">
      <div className="img-c">
        <img alt="img of the game Buldurs gate III" src={image}></img>
      </div>
      <div className="text-c">
        <h3>{title}</h3>
        <div className="data-c">
          <p className="percentage">-{Math.floor(+percentage)}%</p>
          <div className="price">
            <p className="original-price">£{retail}</p>
            <p className="best-price">£{price}</p>
          </div>
        </div>
      </div>
      <button>
        <p>+</p>
      </button>
    </li>
  );
};
