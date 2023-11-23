import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const SelectedGameBestOption = ( {price, image, subTitle, title} ) => {
    
    return (
        <div className="option-card">
            <div className="option-img">
            <img className="gameImage" alt="game" src={`https://www.cheapshark.com${image}`}/>
            </div>
            
            <div className="option-text">
                <div className="option-title">
                    <div>
                        <h2>{title}</h2>
                        <h3>{subTitle}</h3>
                    </div>
                    <img className='deal-stamp' alt="best-deal-stamp" src="https://static.vecteezy.com/system/resources/previews/021/432/987/original/best-deal-grunge-rubber-stamp-free-png.png" width={50}/>
                </div>
                <div className="option-date">
                    <div className="price">
                        <p className="best-price">£{price}</p>
                    </div>
                </div>
            </div>
            <button className="option-button">
                <ArrowForwardIosIcon sx={{ fill: "black" }} />
            </button>
        </div>
    );
};