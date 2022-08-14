import React, { useContext, useEffect } from "react";
import { AppContext } from ".";

function Letter({ letterPos, attemptVal }) {
  const { board, setDisabledLetters, currAttempt, correctWord } =
    useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct
      ? "bg-correct border-0"
      : almost
      ? "bg-almost border-0 "
      : "bg-wrong border-0");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div
      className={`text-gray-300 shadow-lg border-2 
    border-gray-400 h-14 w-14 sm:h-16 sm:w-16 m-1 font-bold grid place-items-center  
  text-2xl sm:text-3xl ${letterState}`}
    >
      {letter}
    </div>
  );
}

export default Letter;
