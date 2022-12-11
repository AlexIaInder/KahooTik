import React, { useEffect } from "react";
import { LinearProgress } from "@mui/material";

export const INITIAL_TIME = 100;

const Timer = ({ seconds, setSeconds, onTimeEnd, timerIdRef }) => {
  useEffect(() => {
    const timerId = setInterval(
      () =>
        setSeconds((prev) => {
          if (!prev) {
            onTimeEnd();
            return INITIAL_TIME;
          }

          return prev - 1;
        }),
      200,
      1
    );

    timerIdRef.current = timerId;

    return () => clearInterval(timerId);
  }, [onTimeEnd, setSeconds, timerIdRef]);

  return (
    <LinearProgress
      sx={{
        width: "100vw",
        position: "fixed",
        bottom: 0,
        left: 0,
        height: 10,
      }}
      value={seconds}
      valueBuffer={INITIAL_TIME}
      variant="buffer"
    />
  );
};

export default Timer;
