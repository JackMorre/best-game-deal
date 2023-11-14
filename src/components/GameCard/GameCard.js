import BuldursGateImg from "./BuldursGateImg.webp";

import "./gameCard.css";

export const GameCard = () => {
  return (
    <li className="card-c">
      <div className="img-c">
        <img alt="img of the game Buldurs gate III" src={BuldursGateImg}></img>
      </div>
      <div className="text-c">
        <h3>Game title</h3>
        <div className="data-c">
          <p className="percentage">-80%</p>
          <div className="price">
            <p className="original-price">£69.99</p>
            <p className="best-price">£49.99</p>
          </div>
        </div>
      </div>
      <button>
        <p>+</p>
      </button>
    </li>
  );
};
