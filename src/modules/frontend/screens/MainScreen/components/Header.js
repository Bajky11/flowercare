import { Avatar, Box, Stack, Typography } from "@mui/material";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import NavigationIconButton from "../../../components/atoms/NavigationIconButton";

const Header = ({username}) => {
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <NavigationIconButton navigateTo="/" Icon={<ArrowBackOutlinedIcon />} />
       <Stack direction={"row"} spacing={1.5} alignItems={"center"}>
       <Typography>{username}</Typography>
        <Avatar />
       </Stack>
    </Stack>
  );
};

export default Header;
