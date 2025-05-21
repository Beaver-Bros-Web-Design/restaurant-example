import { useState, useEffect } from "react";
import {
  Container,
  Stack,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Divider,
  Button,
  Box,
} from "@mui/material";

async function getCateringData() {
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  try {
    const response = await fetch(`${API_BASE_URL}/get-catering-forms`);
    if (!response.ok) {
      throw new Error("Failed to get forms");
    }
    return await response.json();
  } catch (error) {
    console.error("Error getting forms:", error);
    throw error;
  }
}

async function deleteCateringForm(id) {
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  try {
    const response = await fetch(`${API_BASE_URL}/delete-catering-form/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete form");
    }
    return await response.json();
  } catch (error) {
    console.error("Error deleting form:", error);
    throw error;
  }
}

function Admin() {
  const [cateringData, setCateringData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCateringData();
        setCateringData(data);
      } catch (error) {
        console.error("Error fetching catering forms:", error);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteCateringForm(id);
      setCateringData((prevData) => prevData.filter((form) => form._id !== id)); // Remove deleted item from state
    } catch (error) {
      console.error("Error deleting form:", error);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ height: "100px" }}></Box>
      <Typography variant="h4" align="center" gutterBottom>
        Admin Page
      </Typography>

      <Stack spacing={2} alignItems="center">
        <List>
          {cateringData.map((form, index) => (
            <div key={form._id}>
              <ListItem>
                <Card
                  sx={{
                    width: "100%",
                    padding: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">
                      {form.eventType} - {form.date}
                    </Typography>
                    <Typography variant="body1">
                      Name: {form.firstName} {form.lastName}
                    </Typography>
                    <Typography variant="body2">Email: {form.email}</Typography>
                    <Typography variant="body2">
                      Phone: {form.phoneNumber}
                    </Typography>
                    <Typography variant="body2">
                      Guests: {form.numberPeople}
                    </Typography>
                  </CardContent>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(form._id)}
                  >
                    Delete
                  </Button>
                </Card>
              </ListItem>
              {index !== cateringData.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Stack>
    </Container>
  );
}

export default Admin;
