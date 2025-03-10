"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const Why = () => {
  const mobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        padding: "40px",
        backgroundColor: "#4abddb",
        maxWidth: "318px",
        borderRadius: mobile ? "0" : "0 0 0.5rem 0",
      }}
    >
      <Typography sx={{ fontSize: "18px", fontWeight: 600, color: "#ffff" }}>
        Why Us
      </Typography>
      <Box>
        <Typography sx={{ color: "#fff" }}>
          Tutorials by industry experts
        </Typography>
        <Typography sx={{ color: "#fff" }}>
          Peer & expert code review
        </Typography>
        <Typography sx={{ color: "#fff" }}>Coding exercises</Typography>
        <Typography sx={{ color: "#fff" }}>
          Access to our GitHub repos
        </Typography>
        <Typography sx={{ color: "#fff" }}>Community forum</Typography>
        <Typography sx={{ color: "#fff" }}>Flashcard decks</Typography>
        <Typography sx={{ color: "#fff" }}>New videos every week</Typography>
      </Box>
    </Box>
  );
};

export default Why;
