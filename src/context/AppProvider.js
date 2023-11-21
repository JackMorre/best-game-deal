import { useContext, useState, createContext } from "react";
const AppContext = createContext();
export const useApp = () => useContext(AppContext);
export const AppProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);
  const value = { watchlist, setWatchlist };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
