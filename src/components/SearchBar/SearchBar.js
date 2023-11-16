import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Searchbar.css";
export const SearchBar = () => {
  return (
    <div className="search-c">
      <form className="search-form">
        <input
          className="search-input"
          type="text"
          placeholder="Search Games"
        ></input>
        <button className="search-btn" type="submit">
          <ArrowForwardIosIcon sx={{ height: "20px" }} />
        </button>
      </form>
      <p>Please enter a game name</p>
    </div>
  );
};
