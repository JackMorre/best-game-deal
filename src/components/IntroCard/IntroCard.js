import "./IntroCard.css";
import frontImage from "./GamingPerson.jpeg";

export const IntroCard = () => {
  return ( 
    <>
      <div className="container">
        <img src={frontImage} alt="person gaming on monitor"/>
        <div className="bottom-left">
          <h1>DEALS</h1>
          <p>for your favourite games.</p><br></br>
          <p>All in one place.</p>
        </div>
      </div>
    </>
  )
}