import { Button, Stack, Typography } from "@mui/material";
import {
  invalidateUserPlantsAtom,
  resetSelectedPlantFertilizingAtom,
  resetSelectedPlantWateringAtom,
} from "../../state/atoms/userPlantAtoms";
import {
  postFertilizeUserPlantById,
  postWaterUserPlantById,
} from "../../api/queries/quieries";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ErrorTypography from "./components/ErrorTypograpohy";
import FullScreenColorContainer from "../../containers/FullScreenColorContainer";
import GrassOutlinedIcon from "@mui/icons-material/GrassOutlined";
import NavigationIconButton from "../../components/atoms/NavigationIconButton";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import { appStateAtom } from "../../state/state";
import { useAtom } from "jotai";

const styles = {
  borderRadius: "0px 0px 40px 40px",
};

const DetailScreen = () => {
  const [state] = useAtom(appStateAtom);
  const [, invalidateUserPlants] = useAtom(invalidateUserPlantsAtom);
  const [, resetSelectedPlantWatering] = useAtom(
    resetSelectedPlantWateringAtom
  );
  const [, resetSelectedPlantFertilizing] = useAtom(
    resetSelectedPlantFertilizingAtom
  );
  const plantItem = state.selectedPlantItem;
  const plant = state.selectedPlantItem.plant
    ? state.selectedPlantItem.plant
    : plantItem;

  const handleWaterClick = () => {
    postWaterUserPlantById(plantItem.id).then(() => {});
    invalidateUserPlants();
    resetSelectedPlantWatering();
  };

  const handleFertilizeClick = () => {
    postFertilizeUserPlantById(plantItem.id).then(() => {});
    invalidateUserPlants();
    resetSelectedPlantFertilizing();
  };

  return (
    <FullScreenColorContainer color={"background.light"}>
      <Stack bgcolor={"white.main"} padding={2} sx={styles}>
        <Stack alignItems={"start"}>
          <NavigationIconButton navigateTo={"/main"} Icon={<ArrowBackIcon />} />
        </Stack>
        <Stack gap={2} alignItems={"center"} justifyContent={"center"}>
          <img src="sunflower.png" alt="sunflower" />
          <Typography fontSize={24}>{plant.name}</Typography>
        </Stack>
      </Stack>

      <Stack padding={2} gap={3}>
        <Stack direction={"row"} gap={1}>
          <Button
            variant="contained"
            fullWidth
            endIcon={<WaterDropOutlinedIcon />}
            onClick={handleWaterClick}
            disabled={!plantItem.wateringDateExpired }
          >
            Water
          </Button>
          <Button
            variant="contained"
            fullWidth
            endIcon={<GrassOutlinedIcon />}
            onClick={handleFertilizeClick}
            disabled={!plantItem.fertilizerDateExpired }
          >
            Fertilize
          </Button>
        </Stack>

        {plantItem.wateringDateExpired && (
          <ErrorTypography text={"Květina potřebuje zalít"} />
        )}
        {plantItem.fertilizerDateExpired && (
          <ErrorTypography text={"Květina potřebuje pohnojit"} />
        )}

        <Stack gap={1}>
          <Typography fontWeight={"bold"}>Watering requirements</Typography>
          <Typography>{plant.wateringRequirements}</Typography>
        </Stack>
        <Stack gap={1}>
          <Typography fontWeight={"bold"}>Light requirements</Typography>
          <Typography>{plant.sunRequirements}</Typography>
        </Stack>
        <Stack gap={1}>
          <Typography fontWeight={"bold"}>
            Fertilizer fertilizerRequirements
          </Typography>
          <Typography>{plant.sunRequirements}</Typography>
        </Stack>
        <Stack gap={1}>
          <Typography fontWeight={"bold"}>Fertilizer instructions</Typography>
          <Typography>{plant.fertilizerInstructions}</Typography>
        </Stack>
      </Stack>
    </FullScreenColorContainer>
  );
};

export default DetailScreen;
