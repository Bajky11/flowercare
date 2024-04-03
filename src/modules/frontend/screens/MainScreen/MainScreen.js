import FullScreenColorContainer from "../../containers/FullScreenColorContainer";
import Header from "./components/organisms/Header";
import PlantList from "./components/organisms/PlantList";
import SearchBar from "./components/atoms/SearchBar";
import { Stack } from "@mui/material";

const data = [{ name: "rose" }, { name: "basil" }];
const MainScreen = () => {
  return (
    <FullScreenColorContainer color={"background.light"}>
      <Stack padding={2} gap={1}> 
        <Header />
        <Stack gap={3}>
          <SearchBar />
          <PlantList data={data} />
        </Stack>
      </Stack>
    </FullScreenColorContainer>
  );
};

export default MainScreen;
