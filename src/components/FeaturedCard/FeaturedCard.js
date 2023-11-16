import "./FeaturedCard.css";
// import { dataForSearch } from "../../local-json/searchData";


export const FeaturedCard = ({title, thumb}) => {
  return (
    <>
      <div className="featured-container">
        <h2 className="title">FEATURED GAMES</h2>
          <div className="grid-container">
            <div className="container-1">
              <h3 className="game-title">{title}</h3>
              <img className="game-thumbnail" src="https://cdn.fanatical.com/production/product/400x225/4cf0701e-77bf-4539-bda7-129ab3e81f8b.jpeg" alt="featured game card"></img>
            </div>

            <div className="container-2">
              <img className="game-thumbnail" src="https://cdn.fanatical.com/production/product/400x225/105f34ca-7757-47ad-953e-7df7f016741e.jpeg" alt="featured game card"></img>
            </div>

            <div className="container-3">
              <img className="game-thumbnail" src={thumb} alt="featured game card"></img>
            </div>

            <div className="container-4">
              <img className="game-thumbnail" src={thumb} alt="featured game card"></img>
            </div>
          </div>
      </div>
    </>
  )
}

// import "./FeaturedCard.css";
// import React, { useState, useEffect } from 'react';


// export const FeaturedCard = () => {
  
//   const [posts, setPosts] = useState([]);
  
//   useEffect(() => {
//   fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15')
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//         setPosts(data);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });
// }, []);


// return (
//   <div className="posts-container">
//     {posts.map((post) => {
//       return (
//         <div className="featured-container">

//           <h2 className="title">FEATURED GAMES</h2>

//             <div className="grid-container">
//               <div className="container-1">
//                 <h3 className="game-title">{post.title}</h3>
//                 <img className="game-thumbnail" src={post.thumb} alt="featured game card"></img>
//               </div>

//               <div className="container-2">
//                 <h3 className="game-title">{post.title}</h3>
//                 <img className="game-thumbnail" src={post.thumb} alt="featured game card"></img>
//               </div>

//               <div className="container-3">
//                 <h3 className="game-title">{post.title}</h3>
//                 <img className="game-thumbnail" src={post.thumb} alt="featured game card"></img>
//               </div>

//               <div className="container-4">
//                 <h3 className="game-title">{post.title}</h3>
//                 <img className="game-thumbnail" src={post.thumb} alt="featured game card"></img>
//               </div>
//             </div>

//         </div>
//       )}
//   )}
// </div>
// )}