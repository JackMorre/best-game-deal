import { useContext, useState, createContext, useEffect } from "react";
import { getFromLocalStorage } from "../utils/getLocaleStorage";

const AppContext = createContext();
export const useApp = () => useContext(AppContext);
export const AppProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [clickedGame, setClickedGame] = useState(undefined);
  const value = { watchlist, setWatchlist, clickedGame, setClickedGame };
  useEffect(() => {
    // check if items is undefined

    const itemsFromLS = getFromLocalStorage("watchlist", []);

    setWatchlist(itemsFromLS);
  }, []);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
