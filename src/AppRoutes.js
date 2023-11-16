import { Route, Routes } from "react-router-dom";
import { SelectedGame } from "./pages/SelectedGame";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { Watchlist } from "./pages/Watchlist";
import { NoMatch } from "./pages/NoMatch";
import { Deals } from "./pages/Deals";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/search/:id" element={<SelectedGame />} />
      <Route path="/watchlist" element={<Watchlist />} />
      <Route path="/deals" element={<Deals />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
