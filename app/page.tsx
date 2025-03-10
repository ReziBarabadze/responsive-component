import CardContainer from "@/components/CardContainer";
import { Box } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "97vh",
      }}
    >
      <CardContainer />
    </Box>
  );
};

export default Home;
