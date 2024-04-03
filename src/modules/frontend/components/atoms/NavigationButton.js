import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavigationButton = ({ navigateTo, text, ...props }) => {
  return (
    <Button component={Link} to={navigateTo} variant="contained" {...props}>
      {text}
    </Button>
  );
};

export default NavigationButton;
