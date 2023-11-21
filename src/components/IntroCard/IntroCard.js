import "./IntroCard.css";
import frontImage from "./GamingPerson.jpeg";
import stickerImage from "./90-off-sticker.png"

export const IntroCard = () => {
  return ( 
    <>
    <section className="intro-container">
      <div className="container">
        <img src={frontImage} alt="person gaming on monitor"/>
        <div className="bottom-left">
          <h1 className="deals-h1">DEALS</h1>
          <p className="p-text">for your favourite games.</p><br></br>
          <p className="p-text">All in one place.</p>
        </div>
          <div className="up-right">
            <img className="deals-sticker" src={stickerImage} alt="90% off sticker"/>
          </div>
      </div>
    </section>
    </>
  )
}