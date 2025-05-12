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
import { useNavigate } from "react-router-dom";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function FormErrorText({ formError }) {
  if (formError === true) {
    return (
      <Typography sx={{ color: "red", fontSize: "12px" }}>
        Please fill out all fields in form.
      </Typography>
    );
  } else {
    return null;
  }
}

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

async function postFormData(formData) {
  console.log("Form data: ", formData);
}

function onSubmitClick(formData, setFormData, setFormError, navigate) {
  const isFormValid = Object.values(formData).every(
    (value) => value !== null && value !== ""
  );
  if (isFormValid) {
    postFormData(formData);
    clearFormData(setFormData);
    navigate("/catering-success");
  } else {
    setFormError(true);
    scrollToTop();
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
  const [formError, setFormError] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
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
      <FormErrorText formError={formError} />
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
        type="number"
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
        onClick={() =>
          onSubmitClick(formData, setFormData, setFormError, navigate)
        }
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
