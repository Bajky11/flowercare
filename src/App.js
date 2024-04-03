import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import DetailScreen from "./modules/frontend/screens/DetailScreen";
import FullScreenColorContainer from "./modules/frontend/containers/FullScreenColorContainer";
import LoginScreen from "./modules/frontend/screens/LoginScreen";
import MainScreen from "./modules/frontend/screens/MainScreen";
import React from "react";
import ThemeContainer from "./modules/frontend/containers/ThemeContainer";

function App() {
  return (
    <ThemeContainer>
      <FullScreenColorContainer>
        <Router>
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/main" element={<MainScreen />} />
            <Route path="/detail" element={<DetailScreen />} />
          </Routes>
        </Router>
      </FullScreenColorContainer>
    </ThemeContainer>
  );
}

export default App;
