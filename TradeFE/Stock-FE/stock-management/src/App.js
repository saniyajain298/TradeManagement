import { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TradeDetails from "./Page/TradeDetails";
import OrderMaster from "./Page/OrderMaster";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <TradeDetails themeMode={themeMode} setThemeMode={setThemeMode} />
            }
          />
          <Route
            path="/order"
            element={
              <OrderMaster themeMode={themeMode} setThemeMode={setThemeMode} />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
