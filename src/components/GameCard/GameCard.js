import "./gameCard.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const GameCard = ({ title, image, price }) => {
  return (
    <li className="card-c">
      <div className="img-c">
        <img alt="img of the game Buldurs gate III" src={image}></img>
      </div>
      <div className="text-c">
        <h3>{title}</h3>
        <div className="data-c">
          <div className="price">
            <p className="best-price">£{price}</p>
          </div>
        </div>
      </div>
      <button>
        <ArrowForwardIosIcon />
      </button>
    </li>
  );
};
