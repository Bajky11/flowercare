import {
  Box,
  IconButton,
  Modal,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { appStateAtom, setAllPlantsAtom } from "../../../state/state";
import {
  fetchAllPlantsPagable,
  fetchPlantsByNamePagable,
} from "../../../api/queries/quieries";
import { useEffect, useState } from "react";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ModalContainer from "../../../containers/ModalContainer";
import PlantList from "./PlantList";
import SearchBar from "./SearchBar";
import { useAtom } from "jotai";
import usePagination from "../hooks/usePagination";

const AddPlantModal = ({ open, toggleOpen }) => {
  const [state] = useAtom(appStateAtom);
  const [, setAllPlants] = useAtom(setAllPlantsAtom);
  const [text, setText] = useState("");
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const {
    pageNumber,
    pageSize,
    sort,
    pageableState,
    incrementPageNumber,
    decrementPageNumber,
    updatePageableState,
    setPageNumber,
    setSort,
  } = usePagination(0, isSmallScreen ? 4 : 6, "asc");

  function fetchAllPlants() {
    fetchAllPlantsPagable(pageNumber, pageSize, sort).then((pageable) => {
      setAllPlants(pageable.content);
      updatePageableState(pageable);
    });
  }

  function fetchPlantsByName() {
    fetchPlantsByNamePagable(text, 0, pageSize, sort).then((pageable) => {
      setAllPlants(pageable.content);
      updatePageableState(pageable);
    });
  }

  useEffect(() => {
    if (!open) return;
    if (text === "") fetchAllPlants();
    else fetchPlantsByName();
  }, [open, pageNumber, pageSize, sort, text]);

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
            <Grid2 container spacing={1} direction={"row"} alignItems={"center"}>
              <Grid2 xs>
                <SearchBar onChange={setText} />
              </Grid2>
              <Grid2>
                <ToggleButtonGroup value={sort} size="small">
                  <ToggleButton value={"asc"} onClick={() => setSort("asc")}>
                    ASC
                  </ToggleButton>
                  <ToggleButton value={"desc"} onClick={() => setSort("desc")}>
                    DESC
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid2>
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
