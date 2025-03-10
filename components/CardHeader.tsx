import { Box, Typography } from "@mui/material";
import React from "react";

const CardHeader = () => {
  return (
    <Box
      sx={{
        padding: "40px",
        backgroundColor: "#fff",
        borderRadius: "0.5rem 0.5rem 0 0",
      }}
    >
      <Typography
        sx={{ fontSize: "1.5rem", color: "#2ab3b1", fontWeight: 600 }}
      >
        Join our community
      </Typography>
      <Typography
        sx={{
          fontSize: "18px",
          color: "#c0df33",
          ontWeight: 600,
          margin: "1.5rem 0 0.75rem 0",
        }}
      >
        30-day, hassle-free money back guarantee
      </Typography>
      <Typography sx={{ color: "#9aa7be" }}>
        Gain access to our full library of tutorials along with expert code
        reviews. Perfect for any developers who are serious about honing their
        skills.
      </Typography>
    </Box>
  );
};

export default CardHeader;
