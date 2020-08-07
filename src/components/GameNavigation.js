import React, { useContext } from "react";
import context from './Context';
import { Box, Button } from "rebass";
import {FaArrowCircleLeft} from 'react-icons/fa';
import {FaArrowCircleRight} from 'react-icons/fa';
import {FaRandom} from 'react-icons/fa';
import SelectLanguage from './SelectLanguage';

const styles = {
  navContainer: {
    backgroundColor: "#F5F5FA",
    borderRadius: ".5em",
    margin: "1em",
    padding: "1em",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "@media screen and (max-width: 600px)": {
      flexDirection: "column-reverse",
      alignItems: 'center',
    },
  },
  navButton: {
    margin: ".5em",
    fontWeight: "bold",
    display: "inline-flex",
    alignItems: "center",
    "@media screen and (max-width: 600px)": {
      width: 50,
      height: 50,
      fontSize: 30,
      justifyContent: 'center',
      margin: '1em .25em .5em',
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.4
    }
  },
  langSelect: {
    maxWidth: 150,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
};

export default function GameWithContext() {
  const {
    goToNextQuestion,
    goToPrevQuestion,
    goToRandomUnvisitedQuestion,
    activeQuestionNum,
    questions,
  } = useContext(context);

  const nextQuestion = () => {
    goToNextQuestion();
  }
  const prevQuestion = () => {
    goToPrevQuestion();
  };
  const randomQuestion = () => {
    goToRandomUnvisitedQuestion()
  }
  return (
    <Box sx={styles.navContainer} as="nav">
      <Box>
        <Button
          sx={styles.navButton}
          onClick={prevQuestion}
          disabled={activeQuestionNum === 1}
        >
          <FaArrowCircleLeft />
        </Button>
        <Button
          sx={styles.navButton}
          onClick={nextQuestion}
          disabled={activeQuestionNum === questions.length}
        >
          <FaArrowCircleRight />
        </Button>
        {/* <Button sx={styles.navButton} onClick={randomQuestion}>
          <FaRandom />
        </Button> */}
      </Box>
      <Box sx={styles.langSelect}>
       <SelectLanguage/>
      </Box>
    </Box>
  );
}
