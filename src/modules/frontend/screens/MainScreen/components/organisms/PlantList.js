import AddPlantListItem from "../molecules/AddPlantListItem";
import Grid from "@mui/material/Grid";
import PlantListItem from "../molecules/PlantListItem";

const PlantList = ({ data }) => {
  return (
    <Grid container spacing={2} alignItems={"center"} justifyContent={"center"}>
      {data.map((element) => (
        <Grid item key={element.name}>
          <PlantListItem name={element.name} />
        </Grid>
      ))}
      <Grid item>
        <AddPlantListItem />
      </Grid>
    </Grid>
  );
};

export default PlantList;
