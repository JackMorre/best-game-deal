import { Image } from "react-bootstrap";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";

import { getFromLocalStorage } from "../../utils/getLocaleStorage";
import { useApp } from "../../context/AppProvider";

export const SelectedGameThumbnail = ({ header, thumbnail, info }) => {
  const [value, setValue] = useState(2);

  const { setWatchlist, clickedGame } = useApp();

  const addGame = () => {
    console.log(clickedGame);
    const itemsFromLS = getFromLocalStorage("watchlist", []);

    const exists = itemsFromLS.some((x) => x.gameID === clickedGame.gameID);

    if (exists) {
      const newArr = itemsFromLS.filter((item) => {
        if (item.gameID === clickedGame.gameID) {
          return undefined;
        } else return item;
      });
      localStorage.setItem("watchlist", JSON.stringify(newArr));
      setWatchlist(newArr);
    } else {
      const newItems = [...itemsFromLS, clickedGame];
      localStorage.setItem("watchlist", JSON.stringify(newItems));
      setWatchlist(newItems);
    }
  };

  const StyledAvatar = styled(Avatar)`
    ${({ theme }) => `
    cursor: pointer;
    background-color: #A688FA;
    transition: ${theme.transitions.create(["background-color", "transform"], {
      duration: theme.transitions.duration.standard,
    })};
    &:hover {
        background-color: #BA9FFB;
        transform: scale(1.3);
    }
    `}
  `;

  return (
    <div className="divStyle">
      <div className="selectedGameContainer">
        <Image className="gameImage" alt="game" fluid src={thumbnail} />
        <div className="head">
          <div>
            <h1 className="game-head">{header}</h1>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet. Eum neque adipisci qui enim quisquam vel
            quas nulla. Et nisi nesciunt At blanditiis delectus eum quasi
            voluptatem ut enim sapiente cum alias sint ut delectus voluptate.
          </p>
          <div className="streamStyle">
            <Tooltip title="Add to watch list">
              <IconButton onClick={addGame}>
                <StyledAvatar>
                  <FavoriteIcon />
                </StyledAvatar>
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};
