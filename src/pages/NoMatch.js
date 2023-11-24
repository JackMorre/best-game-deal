import { Link } from "react-router-dom";
import { NoMatchCards } from "../components/NoMatchCard/NoMatchCards";
import "./noMatch.css";

export const NoMatch = () => {
  return (
    <div className="noMatch">
      <h1>Oops!</h1>
      <h2 className="error-margin">
        We couldn't find the game you were looking for!
      </h2>
      <Link to="/" id="linkHome">
        Home
      </Link>
    </div>
  );
};
