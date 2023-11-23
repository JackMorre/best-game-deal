import { Link } from "react-router-dom";
import { NoMatchCards } from "../components/NoMatchCard/NoMatchCards";
import "./noMatch.css";

export const NoMatch = () => {
  return (
    <div className="noMatch">
      <h1>Oops ...</h1>
      <h2>Did you want one of these games:</h2>
      <div className="noMatchContainer">
        <Link to="/" id="option1" className="options">
          <NoMatchCards />
        </Link>
        <Link to="/" id="option2" className="options">
          <NoMatchCards />
        </Link>
        <Link to="/" id="option3" className="options">
          <NoMatchCards />
        </Link>
        <Link to="/" id="option4" className="options">
          <NoMatchCards />
        </Link>
      </div>
      <Link to="/" id="linkHome">
        Link to Home Page
      </Link>
    </div>
  );
};
