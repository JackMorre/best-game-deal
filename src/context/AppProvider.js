import { useContext, useState, createContext, useEffect } from "react";
import { getFromLocalStorage } from "./utils/getFromLocalStorage";

const AppContext = createContext();
export const useApp = () => useContext(AppContext);
export const AppProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);
  const value = { watchlist, setWatchlist };
  useEffect(() => {
    // check if items is undefined
    if (!watchlist) {
      const itemsFromLS = getFromLocalStorage("watchlist", []);

      setWatchlist(itemsFromLS);
    }
  }, [watchlist]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
