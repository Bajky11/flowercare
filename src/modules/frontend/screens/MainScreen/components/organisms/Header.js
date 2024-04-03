import { Avatar, Stack } from "@mui/material";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import NavigationIconButton from "./../../../../components/atoms/NavigationIconButton";

const Header = () => {
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <NavigationIconButton navigateTo="/" Icon={<ArrowBackOutlinedIcon />} />
        <Avatar/>
    </Stack>
  );
};

export default Header;
