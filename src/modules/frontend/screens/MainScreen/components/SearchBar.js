import { Paper, Stack, TextField } from "@mui/material";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const styles = {
  borderRadius: "16px",
  backgroundColor: "#ffffff",
  border: "none",
  "& fieldset": { border: "none" },
};

const SearchBar = ({ onChange }) => {
  return (
    <Stack borderRadius={4} boxShadow={"0px 4px 4px 0px rgba(0,0,0,0.1)"}>
      <TextField
        label={"Search"}
        variant="outlined"
        fullWidth
        InputProps={{ sx: styles, endAdornment: <SearchOutlinedIcon /> }}
        onChange={(e) => onChange(e.target.value)}
      />
    </Stack>
  );
};

export default SearchBar;
