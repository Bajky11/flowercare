import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Stack } from "@mui/material";
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

const PlantListItem = ({ name }) => {
  const needCare = true;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/detail");
  };

  return (
    <div style={styles.container}>
      {needCare && <ErrorOutlineIcon sx={styles.icon} />}
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        borderRadius={2}
        minWidth={"150px"}
        minHeight={"120px"}
        bgcolor={"#ffffff"}
        gap={1}
        padding={1}
        boxShadow={"0px 4px 4px 0px rgba(0,0,0,0.1)"}
        onClick={handleClick}
        border={needCare ? "1px solid #C86D6D" : ""}
      >
        <img src={"Sunflower.png"} alt={name} />
        {name}
      </Stack>
    </div>
  );
};

export default PlantListItem;
