import {
  Box,
  IconButton,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { appStateAtom, setAllPlantsAtom } from "../../../state/state";
import { useEffect, useState } from "react";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ModalContainer from "../../../containers/ModalContainer";
import PlantList from "./PlantList";
import SearchBar from "./SearchBar";
import { fetchAllPlantsPagable } from "../../../api/queries/quieries";
import { useAtom } from "jotai";
import usePagination from "../hooks/usePagination";

const AddPlantModal = ({ open, toggleOpen }) => {
  const [state] = useAtom(appStateAtom);
  const [, setAllPlants] = useAtom(setAllPlantsAtom);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const {
    pageNumber,
    pageSize,
    sort,
    pageableState,
    incrementPageNumber,
    decrementPageNumber,
    updatePageableState,
  } = usePagination(0, isSmallScreen ? 4 : 6, "asc");

  useEffect(() => {
    if (open) {
      fetchAllPlantsPagable(pageNumber, pageSize, sort).then((pageable) => {
        setAllPlants(pageable.content);
        updatePageableState(pageable);
      });
    }
  }, [open, pageNumber, pageSize, sort, setAllPlants, updatePageableState]);

  return (
    <Modal open={open} onClose={toggleOpen}>
      <ModalContainer>
        <Grid2
          spacing={3}
          direction={"column"}
          container
          justifyContent={"space-between"}
          flex={1}
        >
          <Grid2 container direction={"column"}>
            <Grid2>
              <SearchBar />
            </Grid2>
            <Grid2>
              <PlantList
                data={state.allPlants}
                whatToDoOnClick={"addToUserPlants"}
              />
            </Grid2>
          </Grid2>
          <Grid2
            alignItems={"center"}
            justifyContent={"space-between"}
            container
          >
            <Grid2>
              <IconButton onClick={() => decrementPageNumber()}>
                {"<-"}
              </IconButton>
            </Grid2>
            <Grid2>
              <Typography>
                {pageNumber + 1}/{pageableState.totalPages}
              </Typography>
            </Grid2>
            <Grid2>
              <IconButton onClick={() => incrementPageNumber()}>
                {"->"}
              </IconButton>
            </Grid2>
          </Grid2>
        </Grid2>
      </ModalContainer>
    </Modal>
  );
};

export default AddPlantModal;
