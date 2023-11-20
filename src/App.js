import AppRoutes from "./AppRoutes";
import { MainNavBar } from "./components/MainNavBar/MainNavBar";

import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainNavBar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}
