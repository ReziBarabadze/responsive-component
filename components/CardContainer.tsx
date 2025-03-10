"use client";
import { Box } from "@mui/material";
import React from "react";
import CardHeader from "./CardHeader";
import CTA from "./CTA";
import Why from "./Why";
import useMediaQuery from "@mui/material/useMediaQuery";

const CardContainer = () => {
  const mobile = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ maxWidth: "635px", maxHeight: "475px" }}>
      <CardHeader />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
        }}
      >
        <CTA />
        <Why />
      </Box>
    </Box>
  );
};

export default CardContainer;
