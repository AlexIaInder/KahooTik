import * as React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./start.css";
import StartContainer from "./Container";

export const Start = () => {
  const navigate = useNavigate();

  return (
    <StartContainer>
      <Typography
        variant="h3"
        sx={{ color: "white" }}
        className="tracking-in-expand"
      >
        Welcome to KahooTik!
      </Typography>
      <Typography
        variant="p"
        sx={{
          color: "white",
          fontSize: "20px",
        }}
      >
        A journey of a thousand miles begins with a single step.
      </Typography>

      <Button
        className="heartbeat"
        variant="contained"
        onClick={() => navigate("/question")}
        sx={{
          marginTop: "170px",
          marginRight: "60px",
        }}
      >
        Start
      </Button>
    </StartContainer>
  );
};
