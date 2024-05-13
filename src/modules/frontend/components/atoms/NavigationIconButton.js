import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const NavigationIconButton = ({ navigateTo, onClick, Icon }) => {
  return (
    <IconButton
      component={Link}
      to={navigateTo}
      onClick={onClick ? onClick : () => {}}
    >
      {Icon}
    </IconButton>
  );
};

export default NavigationIconButton;
