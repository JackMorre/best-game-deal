import {  Button, Image } from "react-bootstrap";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import { useState } from "react";

export const SelectedGameThumbnail = ({header, thumbnail}) => {
    const [value, setValue] = useState(2);

    return (
        <div  className="divStyle">
            <div className="selectedGameContainer">
                <Image className="gameImage" alt="game" fluid src={thumbnail}/>
                <div className="head">
                <h1 className="game-head" >{header}</h1>
                    <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {setValue(newValue);}}
                    />
                <p>Lorem ipsum dolor sit amet. Eum neque adipisci qui enim quisquam vel quas nulla. Et nisi nesciunt At blanditiis delectus eum quasi voluptatem ut enim sapiente cum alias sint ut delectus voluptate.</p>
                <div className="streamStyle">
                    <Button className="button"> Stream Now</Button>
                    <FavoriteIcon/>
                </div>
                </div>
            </div>
        </div>
    );
};