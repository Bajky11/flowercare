import Grid from "@mui/material/Grid";
import PlantListItem from "./PlantListItem";

const PlantList = ({ data, whatToDoOnClick }) => {
  return (
    <Grid container spacing={2} alignItems={"center"} justifyContent={"center"}>
      {data.map((element, id) => (
        <Grid item key={id}>
          <PlantListItem item={element} whatToDoOnClick={whatToDoOnClick} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PlantList;
