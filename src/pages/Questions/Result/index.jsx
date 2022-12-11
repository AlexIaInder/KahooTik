import React from "react";
import quizData from "../../../quiz.json";
import "./result.css";
import winner from "../../../image/Winner.jpg";
import { Box, Typography } from "@mui/material";
import CountUp from "react-countup";

const Result = ({ rightAnswered }) => {
  const finalResult = Math.floor((rightAnswered * 100) / quizData.data.length);
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${winner})`,
        backgroundSize: "cover",
      }}
    >
      <Box>
        <Typography variant="h1" sx={{ color: "white" }} ml={3}>
          Your result : <CountUp end={finalResult} />%
        </Typography>
      </Box>
    </Box>
  );
};

export default Result;
