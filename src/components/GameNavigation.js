import React, { useState, useContext } from "react";
import context from './Context';
import { Box, Button, Text } from "rebass";
import { Label, Select } from "@rebass/forms";
import supportedLangs from '../../content/supportedLanguages.json';
import {GrLanguage} from 'react-icons/gr';
import {FaArrowCircleLeft} from 'react-icons/fa';
import {FaArrowCircleRight} from 'react-icons/fa';
import {FaRandom} from 'react-icons/fa';
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
  label: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: ".5em",
    fontWeight: "bold",
    fontSize: 25,
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
        <Button sx={styles.navButton} onClick={randomQuestion}>
          <FaRandom />
        </Button>
      </Box>
      <Box sx={styles.langSelect}>
        <Label htmlFor="lang" sx={styles.label}>
          <GrLanguage />
        </Label>
        <Select id="lang" name="lang" defaultValue="English">
          {Object.entries(supportedLangs).map((langWithData) => {
            const lang = langWithData[1];
            return <option key={lang[0]}>{lang[1]}</option>;
          })}
        </Select>
      </Box>
    </Box>
  );
}
