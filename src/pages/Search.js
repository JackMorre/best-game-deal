import { useEffect, useState } from "react";
import { GameCard } from "../components/GameCard/GameCard";
import axios from "axios";
import { dataForSearch } from "../local-json/searchData";

export const Search = () => {
  const [url, setUrl] = useState();
  // declare a state variable selectedOrg and set the default value as undefined
  const [data, setData] = useState();

  // useEffect hook expects a callback function which it will execute every time something in the list of its dependencies changes. The list of dependencies contains selectedOrg which means the callback function will every time selectedOrg changes
  useEffect(
    () => {
      // check if selectedOrg is truthy
      if (url) {
        console.log(dataForSearch);
        // declare a async function to fetch data from an API using the Web API of fetch
        const fetchData = async () => {
          // use axios get method to make a GET request to an URL for the value of the selectedOrg
          const { data } = await axios.get("./gameInfo.json");

          // the setter function from useState for repos is used to change the state of repos to the data from the API
          console.log(data);
          // setData(data);
        };

        // execute the fetchData function
        fetchData();
      }
    },
    // add selectedOrg to the list of dependencies which will execute the callback function every time something in the list changes
    [url]
  );
  return (
    <div style={{ padding: "1rem" }}>
      <h2 style={{ color: "black" }}>Search</h2>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <GameCard />
      </ul>
    </div>
  );
};
