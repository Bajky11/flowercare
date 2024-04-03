import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const NavigationIconButton = ({ navigateTo, Icon }) => {
  return (
    <IconButton component={Link} to={navigateTo}>
      {Icon}
    </IconButton>
  );
};

export default NavigationIconButton;
