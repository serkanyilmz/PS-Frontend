import { Card, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';

export function Status({ id }: { id: number }) {

  const [name, setName] = useState([]);

  useEffect(() => {
    const fetchName = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/status/getName/"+id);
        setName(response.data);
      } catch (error) {
        console.error('Error fetching name:', error);
      } 
    };
    fetchName();
  }, []);

  
  return (
    <Card
      sx={{
        width: "300px",
        margin: "10px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflowX: "hidden", // Enables horizontal scrolling
        flexShrink: 0,         // Prevent shrinking of the card below 300px
      }}
    >
      <Typography variant="h6">{name}</Typography>
      <Box
        sx={{
          flexGrow: 1,          // Allow this Box to expand
          overflowY: "auto",    // Enable vertical scrolling for the content
        }}
      >
        <Card style={{ height: "150px", marginBottom: "10px" }}>Task</Card>
        <Card style={{ height: "150px", marginBottom: "10px" }}>Task</Card>
        <Card style={{ height: "150px", marginBottom: "10px" }}>Task</Card>
        <Card style={{ height: "150px", marginBottom: "10px" }}>Task</Card>
        <Card style={{ height: "150px", marginBottom: "10px" }}>Task</Card>
        <Card style={{ height: "150px", marginBottom: "10px" }}>Task</Card>
        <Card style={{ height: "150px", marginBottom: "10px" }}>Task</Card>
        <Card style={{ height: "150px", marginBottom: "10px" }}>Task</Card>
        <Card style={{ height: "150px", marginBottom: "10px" }}>Task</Card>
      </Box>
    </Card>
  );
}
