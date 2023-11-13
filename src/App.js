import AppRoutes from "./AppRoutes";

import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}
