import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AddScreen from "./modules/frontend/screens/AddScreen/AddScreen";
import DetailScreen from "./modules/frontend/screens/DetailScreen/DetailScreen";
import LoginScreen from "./modules/frontend/screens/LoginScreen/LoginScreen";
import MainScreen from "./modules/frontend/screens/MainScreen/MainScreen";
import { Provider } from "jotai";
import React from "react";
import StateWatcherContainer from "./modules/frontend/containers/stateWatcherContainer";
import ThemeContainer from "./modules/frontend/containers/ThemeContainer";

function App() {
  return (
    <Provider>
      <StateWatcherContainer>
        <ThemeContainer>
          <Router>
            <Routes>
              <Route path="/" element={<LoginScreen />} />
              <Route path="/main" element={<MainScreen />} />
              <Route path="/detail" element={<DetailScreen />} />
              <Route path="/add" element={<AddScreen />} />
            </Routes>
          </Router>
        </ThemeContainer>
      </StateWatcherContainer>
    </Provider>
  );
}

export default App;
