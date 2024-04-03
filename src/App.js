import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import DetailScreen from "./modules/frontend/screens/DetailScreen/DetailScreen";
import FullScreenColorContainer from "./modules/frontend/containers/FullScreenColorContainer";
import LoginScreen from "./modules/frontend/screens/LoginScreen/LoginScreen";
import MainScreen from "./modules/frontend/screens/MainScreen/MainScreen";
import React from "react";
import ThemeContainer from "./modules/frontend/containers/ThemeContainer";

function App() {
  return (
    <ThemeContainer>
        <Router>
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/main" element={<MainScreen />} />
            <Route path="/detail" element={<DetailScreen />} />
          </Routes>
        </Router>
    </ThemeContainer>
  );
}

export default App;
