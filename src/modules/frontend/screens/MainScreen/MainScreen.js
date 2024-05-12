import { Box, Divider, IconButton, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AddPlantModal from "./components/AddPlantModal";
import FullScreenColorContainer from "../../containers/FullScreenColorContainer";
import Header from "./components/Header";
import PlantList from "./components/PlantList";
import SearchBar from "./components/SearchBar";
import { appStateAtom } from "../../state/state";
import { fetchUserPlantsById } from "../../api/queries/quieries";
import { setUserPlantsAtom } from "../../state/atoms/userPlantAtoms";
import { useAtom } from "jotai";

const MainScreen = () => {
  const [state] = useAtom(appStateAtom);
  const [, setUserPlants] = useAtom(setUserPlantsAtom);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (state && state.loggedUser && state.userPlantsInvalidated) {
      fetchUserPlantsById(state.loggedUser.id).then((plants) => {
        console.log(plants);
        setUserPlants(plants);
      });
    }
  }, [state.loggedUser, state.userPlantsInvalidated]);

  const onSearch = () => {
    console.log("onSearch");
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <FullScreenColorContainer color={"background.light"}>
        <Stack padding={2} gap={1}>
          <Header username={state.loggedUser.name} />
          <Stack gap={3}>
            {/* <SearchBar onChange={onSearch} /> */}
            <Divider/>
            <PlantList data={state.userPlants} whatToDoOnClick={"showDetail"} />
          </Stack>

          <Box sx={{ position: "absolute", right: "30px", bottom: "30px" }}>
            <IconButton
              sx={{ backgroundColor: "White", width: "48px", height: "48px" }}
              onClick={toggleModal}
            >
              <AddOutlinedIcon />
            </IconButton>
          </Box>
        </Stack>
      </FullScreenColorContainer>
      <AddPlantModal open={modalOpen} toggleOpen={toggleModal} />
    </div>
  );
};

export default MainScreen;
