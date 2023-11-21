import { useNavigate } from "react-router-dom";
import "./gameCard.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const GameCard = ({ title, image, price, dealID, watchlist }) => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/search/:id${dealID}`;
    navigate(path);
  };
  return (
    <li className="card-c">
      <div className="img-c">
        <img alt="img of the game Buldurs gate III" src={image}></img>
      </div>
      <div className="text-c">
        <div className="title-c">
          <h3>{title}</h3>
          {watchlist ? (
            <FavoriteBorderIcon sx={{ alignSelf: "flex-start" }} />
          ) : (
            ""
          )}
        </div>

        <div className="data-c">
          <div className="price">
            <p className="best-price">£{price}</p>
          </div>
        </div>
      </div>
      <button onClick={routeChange}>
        <ArrowForwardIosIcon sx={{ fill: "black" }} />
      </button>
    </li>
  );
};
