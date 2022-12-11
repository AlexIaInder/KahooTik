import { useEffect } from "react";
import quizData from "../../quiz.json";

import duringSessionTrack from "../../sound/matrix.mp3";
import winnerTrack from "../../sound/winner.mp3";

const duringSessionTrackAudio = new Audio(duringSessionTrack);
const winnerTrackAudio = new Audio(winnerTrack);

export const usePlayAudio = (activeQuestionNumber) => {
  useEffect(() => {
    duringSessionTrackAudio.play();

    return () => {
      duringSessionTrackAudio.currentTime = 0;
      winnerTrackAudio.currentTime = 0;

      duringSessionTrackAudio.pause();
      winnerTrackAudio.pause();
    };
  }, []);

  useEffect(() => {
    if (activeQuestionNumber === quizData.data.length) {
      duringSessionTrackAudio.pause();
      winnerTrackAudio.play();
    }
  }, [activeQuestionNumber]);
};
