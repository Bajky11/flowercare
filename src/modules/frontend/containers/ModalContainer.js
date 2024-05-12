import { Box, useMediaQuery } from "@mui/material";

const ModalContainer = ({ children }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        borderRadius: 4,
        minWidth: isSmallScreen ? "70%" : "50%",
        minHeight: isSmallScreen ? "80%" : "60%",
        maxHeight: "80%",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  );
};

export default ModalContainer;
