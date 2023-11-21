import { useNavigate } from "react-router-dom";
import "./FeaturedCard.css";
import React, { useState, useEffect } from "react";

export const FeaturedCard = ({ handleSetDeal }) => {
  const [posts, setPosts] = useState([]);

  let navigate = useNavigate();

  const routeChange = ({ dealID, gameID }) => {
    let path = `/search/${gameID}`;
    const obj = { dealID, gameID };
    handleSetDeal(obj);
    navigate(path);

    console.log(dealID);
  };

  useEffect(() => {
    fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const newArray = [data[6], data[1], data[2], data[3], data[4], data[5]];
        setPosts(newArray);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="background-game-container">
      <div className="featured-container">
        <h2 className="title">FEATURED GAMES</h2>

        <div className="grid-container">
          {posts.map((data, i) => (
            <div
              className={`container-${i}`}
              onClick={() => {
                routeChange(data);
              }}
            >
              <div key={data.dealID}>
                <h3 className="game-title">{data.title}</h3>
                <img
                  className="game-thumbnail"
                  src={data.thumb}
                  alt="featured game card"
                ></img>
                <div className="price-container">
                  <p className="price-tag">£ {data.salePrice}</p>
                  <p className="price-tag">£ {data.normalPrice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// for slideshow best rated / under five pounds games:
// <div>
//   {data.filter(data => data.salePrice < 5.01).map(filteredData => (
//     <li>
//       {filteredData.salePrice}
//     </li>
//   ))}
// </div>

// import "./FeaturedCard.css";

// export const FeaturedCard = ({title, thumb}) => {
//   return (
//     <>
//     <section className="background-game-container">
//       <div className="featured-container">
//         <h2 className="title">FEATURED GAMES</h2>
//           <div className="grid-container">
//             <div className="container-1">
//               <h3 className="game-title">{title}</h3>
//               <img className="game-thumbnail" src="https://cdn.fanatical.com/production/product/400x225/4cf0701e-77bf-4539-bda7-129ab3e81f8b.jpeg" alt="featured game card"></img>
//             </div>

//             <div className="container-2">
//               <h3 className="game-title">{title}</h3>
//               <img className="game-thumbnail" src="https://cdn.fanatical.com/production/product/400x225/105f34ca-7757-47ad-953e-7df7f016741e.jpeg" alt="featured game card"></img>
//             </div>

//             <div className="container-3">
//               <h3 className="game-title">{title}</h3>
//               <img className="game-thumbnail" src="https://cdn.fanatical.com/production/product/400x225/105f34ca-7757-47ad-953e-7df7f016741e.jpeg" alt="featured game card"></img>
//             </div>

//             <div className="container-4">
//               <h3 className="game-title">{title}</h3>
//               <img className="game-thumbnail" src="https://cdn.fanatical.com/production/product/400x225/105f34ca-7757-47ad-953e-7df7f016741e.jpeg" alt="featured game card"></img>
//             </div>
//           </div>
//       </div>
//     </section>
//     </>
//   )
// }
