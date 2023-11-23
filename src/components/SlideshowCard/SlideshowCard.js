import "./SlideshowCard.css"
import React from "react";
import Slideshow1 from "./Slideshow1.jpg";
import Slideshow2 from "./Slideshow2.jpg";
import Slideshow3 from "./Slideshow3.jpg";



const colors = [
  {
    id: 1,
    src: Slideshow1,
    alt: "Image 1",
    title: "Deus Ex: Human Revolution",
    price: 2.99,
  },
  {
    id: 2,
    src: Slideshow2,
    alt: "Image 2",
    title: "Thief: Deadly Shadows",
    price: 0.98,
  },
  {
    id: 3,
    src: Slideshow3,
    alt: "Image 3",
    title: "Just Cause 2",
    price: 1.49,
  },
];
const delay = 3000;

export const SlideshowCard = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
  <section className="slideshow-background">
    <h2 className="under-5-h2">GAMES UNDER £5</h2>
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((Slideshow, index) => (
          <div
            className="slide"
            key={index}
          ><img key={Slideshow.id} src={Slideshow.src} alt={Slideshow.alt} className="img-slideshow"/>
          <p className="title-paragraph-slideshow">{Slideshow.title}</p>
          <p className="price-slideshow">£ {Slideshow.price}</p></div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }} 
          ></div>
        ))}
      </div>
    </div>
  </section>
  );
}

