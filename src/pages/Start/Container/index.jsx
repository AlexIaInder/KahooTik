import React from "react";
import { Box } from "@mui/material";
import bgImageStart from "../../../image/bg-image.jpg";

const StartContainer = ({ children }) => (
  <Box
    sx={{
      minHeight: "100vh",
      backgroundImage: `url(${bgImageStart})`,
      backgroundSize: "cover",
    }}
  >
    <Box
      sx={{
        paddingTop: "120px",
        paddingRight: "420px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  </Box>
);

export default StartContainer;
