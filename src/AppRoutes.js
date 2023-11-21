import axios from "axios";
import { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import { SelectedGame } from "./pages/SelectedGame";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { Watchlist } from "./pages/Watchlist";
import { NoMatch } from "./pages/NoMatch";
import { Deals } from "./pages/Deals";

export default function AppRoutes() {
  const [url, setUrl] = useState("");

  const [data, setData] = useState();

  const [deal, setDeal] = useState();

  useEffect(() => {
    if (url) {
      console.log(url);
      async function GetData() {
        const fetchData = await axios.get(url);
        console.log(fetchData.data);
        setData(fetchData.data);
      }

      GetData();
      // const newArray = Promise.all(
      //   dataForSearch.map(async (game) => {
      //     const fetchData = async () => {
      //       const { data } = await axios.get("./gameInfo.json");

      //       const gameUpdated = { ...game, bestDeal: data.deals[0] };

      //       return gameUpdated;
      //     };

      //     // execute the fetchData function
      //     const data = await fetchData();
      //     return data;
      //   })
      // ).then((results) => {
      //   console.log(results);
      //   setData(results);
      // });
    }
  }, [url]);

  function handleSetDeal(input) {
    setDeal(input);
  }

  function handleUrlChange(search) {
    setUrl(() => {
      return `https://www.cheapshark.com/api/1.0/games?title=${search}`;
    });
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/search"
        element={
          <Search
            searchData={data}
            handleUrlChange={handleUrlChange}
            handleSetDeal={handleSetDeal}
          />
        }
      />
      <Route path="/search/:id" element={<SelectedGame deal={deal} />} />
      <Route path="/watchlist" element={<Watchlist />} />
      <Route path="/deals" element={<Deals />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
