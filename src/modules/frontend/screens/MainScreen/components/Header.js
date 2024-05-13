import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import {
  invalidateUserPlantsAtom,
  setUserPlantsAtom,
} from "../../../state/atoms/userPlantAtoms";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { setLoggedUserAtom } from "../../../state/state";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

const Header = ({ username }) => {
  const navigate = useNavigate();
  const [, setLoggedUser] = useAtom(setLoggedUserAtom);
  const [, setUserPlants] = useAtom(setUserPlantsAtom);
  const [, invalidateUserPlants] = useAtom(invalidateUserPlantsAtom);

  const onLogout = () => {
    navigate("/");
    setLoggedUser(null);
    setUserPlants([]);
    invalidateUserPlants();
  };

  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <IconButton onClick={onLogout}>
        <ArrowBackOutlinedIcon />
      </IconButton>
      <Stack direction={"row"} spacing={1.5} alignItems={"center"}>
        <Typography>{username}</Typography>
        <Avatar />
      </Stack>
    </Stack>
  );
};

export default Header;
