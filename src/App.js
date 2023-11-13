import AppRoutes from "./AppRoutes";
import ResponsiveAppBar from "./components/Navbar";

import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ResponsiveAppBar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}
