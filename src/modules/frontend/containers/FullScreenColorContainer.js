import { Stack } from "@mui/material";

const FullScreenColorContainer = ({ color, children }) => {
  return (
    <div style={{ height: "100vh" }}>
      <Stack bgcolor={color} height={"100%"} sx={{ minHeight: "100%" }}>
        {children}
      </Stack>
    </div>
  );
};

export default FullScreenColorContainer;
