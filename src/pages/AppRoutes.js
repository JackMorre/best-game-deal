import { Route, Routes } from "react-router-dom";
import SelectedGame from "./SelectedGame";
import Home from "./Home";
import Search from "./Search";
import Wishlist from "./Wishlist";
import NoMatch from "./NoMatch";

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
