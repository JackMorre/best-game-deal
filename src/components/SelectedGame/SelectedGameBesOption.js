import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";
import { useState } from "react";

export const SelectedGameBesOption = () => {
    const [getUrl,setGetUrl] = useState('')

    const selectedGameUrl = () => {
        axios.get('https://www.cheapshark.com/api/1.0/games?id=612')
        .then(res => {
            console.log(res.data.info.title);
            setGetUrl(res.data.info.title)
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="option-card">
            <div className="option-img">
            <img className="gameImage" alt="game" src="https://www.cheapshark.com/img/stores/logos/22.png"/>
            </div>
            
            <div className="option-text">
                <div className="option-title">
                    <div>
                        {getUrl && <h2>{getUrl}</h2>}
                        <h3>GameBillet</h3>
                    </div>
                    <img alt="best-deal-stamp" src="https://static.vecteezy.com/system/resources/previews/021/432/987/original/best-deal-grunge-rubber-stamp-free-png.png" width={50}/>
                </div>
                <div className="option-date">
                    <div className="price">
                        <p className="best-price">£3.89</p>
                    </div>
                </div>
            </div>
            <button className="option-button" onClick={selectedGameUrl}>
                <ArrowForwardIosIcon sx={{ fill: "black" }} />
            </button>
        </div>
    );
};