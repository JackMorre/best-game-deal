import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
/* import axios from "axios";
import { useEffect, useState } from "react"; */

const selectedGameUrl = "https://www.cheapshark.com/api/1.0/games?id=612";

export const SelectedGameBesOption = ({store}) => {
    /* const [post, setPost] = useState(null); */
 /*  useEffect(()=> {
        axios.get(selectedGameUrl).then((resp) => {
            setPost(resp.data);
        });
    }, [])

    if (!post) return null;

    console.log(post);
 */
    return (
        <div className="option-card">
            <div className="option-img">
            <img className="gameImage" alt="game" src={`https://www.cheapshark.com${store.images}`}/>
            </div>
            <div className="option-text">
                <div className="option-title">
                    <h2>game name</h2>
                </div>
                <div className="option-title">
                    <h3>{store.storeName}</h3>
                </div>
                <div className="option-date">
                    <div className="price">
                        <p className="best-price">$4.60</p>
                    </div>
                </div>
            </div>
            <button className="option-button">
                <ArrowForwardIosIcon sx={{ fill: "black" }} />
            </button>
        </div>
    );
};