"use client";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const CTA = () => {
  const mobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        padding: "40px",
        backgroundColor: "#2ab3b1",
        maxWidth: "318px",
        borderRadius: mobile ? "0" : "0 0 0 0.5rem",
      }}
    >
      <Typography sx={{ color: "#fff", fontSize: "18px", fontWeight: 600 }}>
        Monthly Subscription
      </Typography>
      <Typography
        sx={{
          color: "#fff",
          fontSize: "2rem",
          fontWeight: 800,
          display: "flex",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        $29
        <span
          style={{
            color: "rgba(255, 255, 255, 0.5)",
            fontWeight: 400,
            fontSize: "1rem",
            marginLeft: "0.5rem",
          }}
        >
          per month
        </span>
      </Typography>
      <Typography sx={{ color: "#fff" }}>
        Full access for less then $1 a day
      </Typography>
      <Button
        sx={{
          marginTop: "1.5rem",
          backgroundColor: "#c0df33",
          color: "#fff",
          width: "100%",
          textTransform: "none",
          fontWeight: 800,
          padding: "1rem",
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default CTA;
