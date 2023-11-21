import { Stack } from "react-bootstrap";
import { SelectedGameThumbnail } from "../components/SelectedGame/SelectedGameThumbnail";
import { SelectedGameReviews } from "../components/SelectedGame/SelectedGameReviews";
import { SelectedGameInfo } from "../components/SelectedGame/SelectedGameInfo";

import "../components/SelectedGame/SelectedGame.css";

export const SelectedGame = () => {
  return (
    <Stack className="body-page">
      <SelectedGameThumbnail />
      <div className="row">
        <div className="col">
          <SelectedGameInfo />
        </div>
        <div className="col">
          <SelectedGameReviews />
        </div>
      </div>
    </Stack>
  );
};
