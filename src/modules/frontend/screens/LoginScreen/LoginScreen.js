import { Button, Stack, Typography } from "@mui/material";

import FullScreenColorContainer from "../../containers/FullScreenColorContainer";
import { Link } from "react-router-dom";
import NavigationButton from "../../components/atoms/NavigationButton";

const LoginScreen = () => {
  return (
    <FullScreenColorContainer color={"background.main"}>
      <Stack alignItems={"center"} paddingY={7} gap={7}>
        <Typography>For flowers to bloom</Typography>
        <img src={"girlWithSunflowers.png"} alt={"girlWithSunflowers"} />
        <Stack gap={2}>
          <NavigationButton navigateTo="/main" text="Sign In" />
          <Button>Create an account</Button>
        </Stack>
        <Button>Forgot password?</Button>
      </Stack>
    </FullScreenColorContainer>
  );
};

export default LoginScreen;
