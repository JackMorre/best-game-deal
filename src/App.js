import AppRoutes from "./AppRoutes";
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
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}
