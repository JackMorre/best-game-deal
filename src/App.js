import AppRoutes from "./AppRoutes";
import { FooterCard } from "./components/FooterCard/FooterCard";
import { MainNavBar } from "./components/MainNavBar/MainNavBar";
import { AppProvider } from "./context/AppProvider";

import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="App">
          <MainNavBar />
          <AppRoutes />
          <FooterCard />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}
