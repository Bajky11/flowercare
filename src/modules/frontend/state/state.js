import { atom } from "jotai";

// Define the initial state with multiple fields
export const initialState = {
  loggedUser: null,
  userPlants: [],
  userPlantsInvalidated: true,
  allPlants: [],
  selectedPlantItem: null,
};

// Create the main atom
export const appStateAtom = atom(initialState);

export const setPropertyAtom = atom(
  null, // tento atom nemá "get" hodnotu
  (get, set, { propertyName, newValue }) => {
    const state = get(appStateAtom);
    set(appStateAtom, { ...state, [propertyName]: newValue });
  }
);

export const setObjectPropertyAtom = atom(
  null,
  (get, set, { objectName, propertyName, newValue }) => {
    set(appStateAtom, (state) => ({
      ...state,
      [objectName]: {
        ...state.selectedPlantItem,
        [propertyName]: newValue,
      },
    }));
  }
);

// Funkce pro nastavení přihlášeného uživatele
export const setLoggedUserAtom = atom(
  null, // tento atom nemá "get" hodnotu
  (get, set, user) => {
    const state = get(appStateAtom);
    set(appStateAtom, { ...state, loggedUser: user });
  }
);

export const setAllPlantsAtom = atom(
  null, // tento atom nemá "get" hodnotu
  (get, set, plants) => {
    const state = get(appStateAtom);
    set(appStateAtom, { ...state, allPlants: plants });
  }
);

export const setSelectedPlantItemAtom = atom(
  null, // tento atom nemá "get" hodnotu
  (get, set, plant) => {
    const state = get(appStateAtom);
    set(appStateAtom, { ...state, selectedPlantItem: plant });
  }
);
