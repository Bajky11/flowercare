import { Button, Stack, Typography } from "@mui/material";

import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <Stack alignItems={"center"} paddingY={7} gap={7}>
      <Typography>For flowers to bloom</Typography>
      <img src={"girlWithSunflowers.png"} alt={"girlWithSunflowers"}/>
      <Stack gap={2}>
        <Button component={Link} to="/main" variant="contained">
          Sign In
        </Button>
        <Button>Create an account</Button>
      </Stack>
      <Button>Forgot password?</Button>
    </Stack>
  );
};

export default LoginScreen;
