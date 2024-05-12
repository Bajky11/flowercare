import { appStateAtom, setSelectedPlantItemAtom } from "../../../state/state";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Stack } from "@mui/material";
import { invalidateUserPlantsAtom } from "../../../state/atoms/userPlantAtoms";
import { postNewUserPlant } from "../../../api/queries/quieries";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

const styles = {
  container: {
    position: "relative",
    display: "inline-flex",
  },
  icon: {
    color: "#C86D6D",
    position: "absolute",
    top: 5,
    right: 5,
  },
};

const PlantListItem = ({ item, whatToDoOnClick }) => {
  const plant = item.plant ? item.plant : item;
  const needCare = item.fertilizerDateExpired || item.wateringDateExpired;
  const [state] = useAtom(appStateAtom);
  const navigate = useNavigate();
  const [, invalidateUserPlants] = useAtom(invalidateUserPlantsAtom);
  const [, setSelectedPlantItem] = useAtom(setSelectedPlantItemAtom);

  const handleClick = () => {
    if (whatToDoOnClick === "showDetail") {
      setSelectedPlantItem(item);
      navigate(`/detail`);
    }

    if (whatToDoOnClick === "addToUserPlants") {
      postNewUserPlant(state.loggedUser.id, plant.id)
        .then(() => {
          console.log("Plant added successfully");
          invalidateUserPlants();
        })
        .catch((error) => {
          console.log("Error adding plant");
        });
    }
  };

  return (
    <div style={styles.container}>
      {needCare && <ErrorOutlineIcon sx={styles.icon} />}
      <Stack
        alignItems="center"
        justifyContent="center"
        borderRadius={2}
        minWidth="150px"
        minHeight="120px"
        bgcolor="#ffffff"
        gap={1}
        padding={1}
        boxShadow="0px 4px 4px 0px rgba(0,0,0,0.1)"
        onClick={() => handleClick()}
        border={needCare ? "1px solid #C86D6D" : ""}
        sx={{
          "&:hover": {
            backgroundColor: "#f0f0f0",
          },
        }}
      >
        <img src="Sunflower.png" alt={plant.name} />
        {plant.name}
      </Stack>
    </div>
  );
};

export default PlantListItem;
