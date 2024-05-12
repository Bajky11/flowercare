import { Stack, Typography } from "@mui/material";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const ErrorTypography = ({ text }) => {
  return (
    <Stack direction={"row"} spacing={1} alignItems={"center"}>
      <ErrorOutlineIcon color="error" />
      <Typography color={"error"}>{text}</Typography>
    </Stack>
  );
};

export default ErrorTypography;
