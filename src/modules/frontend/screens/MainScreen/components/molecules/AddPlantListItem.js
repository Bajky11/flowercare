import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import NavigationButton from "../../../../components/atoms/NavigationButton";
import { Stack } from "@mui/material";

const AddPlantListItem = ({ name }) => {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={2}
      minWidth={"150px"}
      minHeight={"120px"}
      bgcolor={"#ffffff"}
      gap={1}
      padding={1}
      boxShadow={"0px 4px 4px 0px rgba(0,0,0,0.1)"}
    >
      <AddOutlinedIcon />
    </Stack>
  );
};

export default AddPlantListItem;
