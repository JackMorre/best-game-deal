import {  Button, Image } from "react-bootstrap";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import { useState } from "react";

export const SelectedGameThumbnail = () => {
    const [value, setValue] = useState(2);

    return (
        <div  className="divStyle">
            <div className="selectedGameContainer">
                <Image className="gameImage" alt="game" fluid src="https://cdn.fanatical.com/production/product/400x225/105f34ca-7757-47ad-953e-7df7f016741e.jpeg"/>
                <div className="head">
                <h1 >LEGO BATMAN</h1>
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