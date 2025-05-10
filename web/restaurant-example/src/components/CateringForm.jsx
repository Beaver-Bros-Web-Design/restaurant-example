import React from "react";
import {
  MenuItem,
  Select,
  Box,
  FormControl,
  InputLabel,
  Stack,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

function clearFormData(setFormData) {
  const clearedData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    eventType: "",
    date: "",
    numberPeople: "",
  };
  setFormData(clearedData);
}

async function onSubmit(formData, setFormData) {
  console.log(formData);
  clearFormData(setFormData);
  console.log(formData);
}

function onSubmitClick(formData, setFormData) {
  const isFormValid = Object.values(formData).every(
    (value) => value !== null && value !== ""
  );
  if (isFormValid) {
    onSubmit(formData, setFormData);
  } else {
    console.log("data is missing values");
  }
}

const textFieldStyle = { width: "90%", paddingBottom: "20px" };

function EventTypeDropdown({ formData, handleChange }) {
  return (
    <FormControl sx={textFieldStyle} fullWidth>
      <InputLabel id="demo-simple-select-label">Event Type</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={formData.eventType}
        name="eventType"
        onChange={handleChange}
        label="event-type"
      >
        <MenuItem value="baby-shower">Baby Shower</MenuItem>
        <MenuItem value="birthday">Birthday</MenuItem>
        <MenuItem value="gender-reveal">Gender Reveal Party</MenuItem>
      </Select>
    </FormControl>
  );
}

function DateInput({ formData, handleChange }) {
  return (
    <TextField
      label="Select Date"
      type="date"
      sx={textFieldStyle}
      value={formData.date}
      placeholder=""
      name="date"
      InputLabelProps={{
        shrink: true, // Ensures the label stays at the top
      }}
      onChange={handleChange}
    />
  );
}

function NumberPeople({ formData, handleChange }) {
  return (
    <TextField
      label="Number of People (6 - 30)"
      type="number"
      sx={textFieldStyle}
      value={formData.numberPeople}
      name="numberPeople"
      onChange={handleChange}
      inputProps={{ min: 0, max: 30 }}
    />
  );
}

function CateringForm() {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    eventType: "",
    date: "",
    numberPeople: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <Stack
      sx={{
        width: "40vw",
        height: "auto",
        backgroundColor: "white",
        border: theme.palette.secondary.main,
        alignItems: "center",
        paddingTop: "30px",
      }}
    >
      <Box sx={{ padding: "10px" }} />

      <TextField
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        value={formData.firstName}
        name="firstName"
        onChange={handleChange}
        sx={textFieldStyle}
        helperText="e.g. John"
      />

      <TextField
        id="outlined-basic"
        label="Last Name"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
        variant="outlined"
        sx={textFieldStyle}
        helperText="e.g. Smith"
      />

      <TextField
        id="outlined-basic"
        label="Email"
        name="email"
        onChange={handleChange}
        value={formData.email}
        variant="outlined"
        sx={textFieldStyle}
        helperText="e.g. johnsmith@gmail.com"
      />

      <TextField
        id="outlined-basic"
        label="Phone Number"
        name="phoneNumber"
        onChange={handleChange}
        value={formData.phoneNumber}
        variant="outlined"
        sx={textFieldStyle}
        helperText="(123) - 456 - 0000"
      />

      <EventTypeDropdown formData={formData} handleChange={handleChange} />
      <Box sx={{ height: "10px" }} />

      <DateInput formData={formData} handleChange={handleChange} />
      <Box sx={{ height: "10px" }} />
      <NumberPeople formData={formData} handleChange={handleChange} />
      <Box sx={{ height: "20px" }} />

      <Button
        sx={{ width: "90%" }}
        variant="contained"
        onClick={() => onSubmitClick(formData, setFormData)}
      >
        <Typography
          sx={{ fontSize: "20px", fontWeight: "bold", color: "dark" }}
        >
          Submit
        </Typography>
      </Button>

      <Box sx={{ height: "50px" }} />
    </Stack>
  );
}

export default CateringForm;
