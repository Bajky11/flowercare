import { Button, Stack, Typography } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FullScreenColorContainer from "../../containers/FullScreenColorContainer";
import GrassOutlinedIcon from "@mui/icons-material/GrassOutlined";
import NavigationButton from "./../../components/atoms/NavigationButton";
import NavigationIconButton from "../../components/atoms/NavigationIconButton";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";

const styles = {
  borderRadius: "0px 0px 40px 40px",
};

const DetailScreen = () => {
  return (
    <FullScreenColorContainer color={"background.light"}>
      <Stack bgcolor={"white.main"} padding={2} sx={styles}>
        <Stack alignItems={"start"}>
          <NavigationIconButton navigateTo={"/main"} Icon={<ArrowBackIcon />} />
        </Stack>
        <Stack gap={2} alignItems={"center"} justifyContent={"center"}>
          <img src="sunflower.png" alt="sunflower" />
          <Typography fontSize={24}>Sunflower</Typography>
        </Stack>
      </Stack>

      <Stack padding={2} gap={3}>
        <Stack direction={"row"} gap={1}>
          <Button
            variant="contained"
            fullWidth
            endIcon={<WaterDropOutlinedIcon />}
          >
            Water
          </Button>
          <Button variant="contained" fullWidth endIcon={<GrassOutlinedIcon />}>
            Fertilize
          </Button>
        </Stack>

        <Stack gap={1}>
          <Typography>Watering requirements</Typography>
          <Typography>- Frequently (each 7 days)</Typography>
        </Stack>
        <Stack gap={1}>
          <Typography>Light requirements</Typography>
          <Typography>- Shade</Typography>
        </Stack>
      </Stack>
    </FullScreenColorContainer>
  );
};

export default DetailScreen;
