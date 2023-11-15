import { Stack } from "react-bootstrap";
import { SelectedGameThumbnail } from "../components/SelectedGameThumbnail";
import { SelectedGameReviews } from "../components/SelectedGameReviews";
import { SelectedGameInfo } from "../components/SelectedGameInfo";

import "../SelectedGame.css"

export const SelectedGame = () => {
  return (
    <Stack>
      <SelectedGameThumbnail/>
        <div className="row">
          <div className="col"><SelectedGameInfo/></div>
          <div className="col"><SelectedGameReviews/></div>
        </div>      
    </Stack>
  );
};
