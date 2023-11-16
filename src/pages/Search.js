import { useEffect, useState } from "react";
import { GameCard } from "../components/GameCard/GameCard";
import { SearchBar } from "../components/SearchBar/SearchBar";
import axios from "axios";
import { dataForSearch } from "../local-json/searchData";

export const Search = () => {
  const [url, setUrl] = useState("wow");
  // declare a state variable selectedOrg and set the default value as undefined
  const [data, setData] = useState();

  // useEffect hook expects a callback function which it will execute every time something in the list of its dependencies changes. The list of dependencies contains selectedOrg which means the callback function will every time selectedOrg changes
  useEffect(
    () => {
      // check if selectedOrg is truthy
      if (url) {
        // declare a async function to fetch data from an API using the Web API of fetch

        const newArray = Promise.all(
          dataForSearch.map(async (game) => {
            const fetchData = async () => {
              // use axios get method to make a GET request to an URL for the value of the selectedOrg
              const { data } = await axios.get("./gameInfo.json");

              const gameUpdated = { ...game, bestDeal: data.deals[0] };

              return gameUpdated;

              // the setter function from useState for repos is used to change the state of repos to the data from the API

              // setData(data);
            };

            // execute the fetchData function
            const data = await fetchData();
            return await data;
          })
        ).then((results) => {
          setData(results);
        });
        // console.log(newArray);
      }
    },
    // add selectedOrg to the list of dependencies which will execute the callback function every time something in the list changes
    [url]
  );
  return (
    <section className="search">
      <SearchBar />
      {!data ? (
        <h2 style={{ color: "black" }}>no Searches</h2>
      ) : (
        <div>
          <h2 style={{ color: "black" }}>Search</h2>
          <ul
            style={{
              listStyle: "none",
              padding: "0",
              display: "flex",
              gap: "1rem",
              flexDirection: "column",
            }}
          >
            {data.map((game) => {
              return (
                <GameCard
                  key={game.gameID}
                  title={game.external}
                  image={game.thumb}
                  price={game.cheapest}
                />
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
};
