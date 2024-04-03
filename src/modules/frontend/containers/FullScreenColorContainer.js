import { Stack } from "@mui/material";

const FullScreenColorContainer = ({children}) => {
  return (
    <div style={{ height: "100vh" }}>
      <Stack
        bgcolor={"#C8EAB4"}
        height={"100%"}
        sx={{ minHeight: "100%" }}
      >
        {children}
      </Stack>
    </div>
  );
};

export default FullScreenColorContainer;
