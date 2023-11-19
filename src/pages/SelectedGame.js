import { Stack } from "react-bootstrap";
import { SelectedGameThumbnail } from "../components/SelectedGame/SelectedGameThumbnail";
import { SelectedGameReviews } from "../components/SelectedGame/SelectedGameReviews";

import "../components/SelectedGame/SelectedGame.css"
import { SearchBar } from "../components/SearchBar/SearchBar";
import { SelectedGameBestOptions } from "../components/SelectedGame/SelectedGameBesOptions";

export const SelectedGame = () => {
  return (
    <Stack className="body-page">
      <div className="widthForSearch">
      <SearchBar/>
      </div>
      <SelectedGameThumbnail/>
        <div className="row">
          <div className="col"><SelectedGameBestOptions/></div>
          <div className="col"><SelectedGameReviews/></div>
        </div>      
    </Stack>
  );
};
