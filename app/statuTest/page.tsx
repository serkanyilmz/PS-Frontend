"use client";

import { Box } from "@mui/material";
import { Status } from "../../lib/Status";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%", 
        backgroundColor: "black",
        overflowX: "auto", 
        overflowY: "hidden",    
        boxSizing: "border-box",     
        paddingBottom: "40px",  
      }}
    >
      <Status id={1} />
      <Status id={2} />
      <Status id={3} />
      <Status id={4} />
      <Status id={5} />
    </Box>
  );
}
