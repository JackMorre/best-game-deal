import { Route, Routes } from "react-router-dom";
import { SelectedGame } from "./pages/SelectedGame";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { Wishlist } from "./pages/Wishlist";
import { NoMatch } from "./pages/NoMatch";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/search/:id" element={<SelectedGame />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
