import React from "react";
import { useRef, useState } from "react";
import quizData from "../../quiz.json";
import {
  Box,
  Button,
  Tooltip,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Stack,
} from "@mui/material";
import Toast from "../../components/Toast";
import Result from "./Result";
import bgImageQuestion from "../../image/bg-image-quetion.jpg";
import Timer, { INITIAL_TIME } from "./Timer";
import { usePlayAudio } from "./usePlayAudio";
import { motivationWords, rightWords } from "./encouragingWords";

export const Questions = () => {
  const [activeQuestionNumber, setActiveQuestionNumber] = useState(0);
  const [select, setSelect] = useState(null);
  const [open, setOpen] = useState(false);
  const [rightAnswered, setRightAnswered] = useState(0);
  const [randomText, setRandomText] = useState("");
  const [isRight, setIsRight] = useState(false);
  const [seconds, setSeconds] = useState(INITIAL_TIME);
  const timerIdRef = useRef(null);

  usePlayAudio(activeQuestionNumber);

  const activeQuestion = quizData.data[activeQuestionNumber];

  const moveToNextStep = () => {
    setActiveQuestionNumber((prev) => prev + 1);
    setSelect(null);
  };

  const nextClickHandler = () => {
    if (activeQuestionNumber === quizData.data.length - 1) {
      clearInterval(timerIdRef.current);
    }

    moveToNextStep();
    setOpen(true);
    setSeconds(INITIAL_TIME);

    if (select === activeQuestion.answer) {
      setIsRight(true);
      const randomIndex = Math.floor(Math.random() * rightWords.length);
      setRandomText(rightWords[randomIndex]);
      setRightAnswered(rightAnswered + 1);
    } else {
      setIsRight(false);
      const randomIndex = Math.floor(Math.random() * motivationWords.length);
      setRandomText(motivationWords[randomIndex]);
    }
  };

  if (activeQuestionNumber === quizData.data.length) {
    return <Result rightAnswered={rightAnswered} />;
  }

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${bgImageQuestion})`,
        backgroundSize: "100vw",
        padding: "326px 320px",
        alignItems: "center",
      }}
    >
      <Toast
        open={open}
        setOpen={setOpen}
        severity={isRight ? "success" : "error"}
        text={randomText}
      />
      <Typography variant="h3"> {activeQuestion.question} </Typography>
      <RadioGroup value={select} onChange={(e) => setSelect(e.target.value)}>
        {activeQuestion.choices.map((choice, i) => (
          <FormControlLabel
            componentsProps={{ typography: { fontSize: 20 } }}
            key={i}
            value={i}
            control={<Radio />}
            label={choice}
          />
        ))}
      </RadioGroup>
      <Tooltip title={select === null ? "Please select one option" : ""}>
        <Box width="fit-content" mt={4}>
          <Button
            variant="contained"
            disabled={select === null}
            onClick={nextClickHandler}
          >
            Next
          </Button>
        </Box>
      </Tooltip>
      <Timer
        onTimeEnd={moveToNextStep}
        seconds={seconds}
        setSeconds={setSeconds}
        timerIdRef={timerIdRef}
      />
    </Stack>
  );
};
