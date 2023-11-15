import { Stack } from "react-bootstrap";
import { SelectedGameThumbnail } from "../components/SelectedGameThumbnail";
import "../SelectedGame.css"
import { SelectedGameReview } from "../components/SelectedGameReview";

export const SelectedGame = () => {
  return (
    <Stack>
      <SelectedGameThumbnail/>
      <SelectedGameReview/>
    </Stack>
  );
};
