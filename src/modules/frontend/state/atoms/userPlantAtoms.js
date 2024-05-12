import { appStateAtom, setObjectPropertyAtom, setPropertyAtom } from "../state";

import { atom } from "jotai";

export const invalidateUserPlantsAtom = atom(null, (get, set) => {
    set(setPropertyAtom, {
      propertyName: "userPlantsInvalidated",
      newValue: true,
    });
  });
  
  export const setUserPlantsAtom = atom(
    null, // tento atom nemá "get" hodnotu
    (get, set, plants) => {
      const state = get(appStateAtom);
      set(appStateAtom, {
        ...state,
        userPlants: plants,
        userPlantsInvalidated: false,
      });
    }
  );
  
  export const resetSelectedPlantWateringAtom = atom(null, (get, set) => {
    set(setObjectPropertyAtom, {
      objectName: "selectedPlantItem",
      propertyName: "wateringDateExpired",
      newValue: false,
    });
  });
  
  export const resetSelectedPlantFertilizingAtom = atom(null, (get, set) => {
    set(setObjectPropertyAtom, {
      objectName: "selectedPlantItem",
      propertyName: "fertilizerDateExpired",
      newValue: false,
    });
  });
  
  export const setUserPlantPropertyByIdAtom = atom(
    null,
    (get, set, userPlantId, { propertyName, newValue }) => {
      const state = get(appStateAtom);
      const userPlants = state.userPlants;
  
      const updatedUserPlants = userPlants.map((plant) => {
        if (plant.id === userPlantId) {
          return { ...plant, [propertyName]: newValue };
        }
        return plant;
      });
  
      set(appStateAtom, { ...state, userPlants: updatedUserPlants });
    }
  );