import React, { useEffect } from "react";

import { appStateAtom } from "../state/state";
import { useAtom } from "jotai";

const StateWatcherContainer = ({children}) => {
  const [appState] = useAtom(appStateAtom);

  useEffect(() => {
    console.log("AppState has changed:", appState);
  }, [appState]);

  return children;
};

export default StateWatcherContainer;
