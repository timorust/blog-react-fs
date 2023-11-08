import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export function BasicSelect() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const inputStyle = {
    color: "green", // Set the text color to green
  };

  return (
    <FormControl fullWidth>
      {age}
      <InputLabel
        id="demo-simple-select-label"
        style={{ color: "green" }} // Set the label text color to green
      >
        Age
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
        style={inputStyle}
      >
        <MenuItem value={10} style={inputStyle}>
          Ten
        </MenuItem>
        <MenuItem value={20} style={inputStyle}>
          Twenty
        </MenuItem>
        <MenuItem value={30} style={inputStyle}>
          Thirty
        </MenuItem>
      </Select>
    </FormControl>
  );
}
