import { Card, Stack, Typography } from "@mui/material";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import FecthContainer from "../../containers/FetchContainer";
import FullScreenColorContainer from "../../containers/FullScreenColorContainer";
import NavigationIconButton from "./../../components/atoms/NavigationIconButton";
import SearchBar from "../MainScreen/components/SearchBar";
import useFetchData from "../../api/hooks/useFetchData";

const AddScreen = () => {
  const { data, loading, error } = useFetchData(
    "http://localhost:9000/flowercare/v1/plants"
  );
  console.log(data)
  
  function onChnage(event) {}

  function handleAddPlant() {}

  return (
    <FecthContainer loading={loading}>
      <FullScreenColorContainer color={"background.light"}>
      <NavigationIconButton
        navigateTo={"/main"}
        Icon={<ArrowBackOutlinedIcon />}
      />
      <Stack padding={2} gap={1}>
        <SearchBar onChange={onChnage} />
        {data.map((item) => {
          return (
            <Stack
              component={Card}
              height={50}
              justifyContent={"center"}
              paddingX={2}
              onClick={() => handleAddPlant()}
            >
              <Typography> {item.name}</Typography>
            </Stack>
          );
        })}
      </Stack>
    </FullScreenColorContainer>Ł
    </FecthContainer>
  );
};

export default AddScreen;
