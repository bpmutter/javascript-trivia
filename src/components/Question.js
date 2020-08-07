import React, {useState, useContext, useEffect} from 'react';
import { Box, Button, Text } from "rebass";
import { Label, Radio } from "@rebass/forms";
import ReactMarkdown  from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import questions from '../../content/en.json';
import context from './Context';

const styles = {
  submitButton: {
    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.4,
    },
  }
};

export default function Question(){
    const {
      activeQuestionNum,
      questions,
    } = useContext(context);

    const [selected, setSelected] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [explanationOpen, setExplanationOpen] = useState(false);
    const [question, setActiveQuestion] = useState({});

    useEffect(()=>{
      if(activeQuestionNum && questions.length){
        setActiveQuestion(questions[activeQuestionNum-1]);
        setSelected(null);
        setCorrectAnswer(null);
        setExplanationOpen(false);
      } 
    },[activeQuestionNum, questions])

    const handleOptionChange = e => {
        const answer = e.target.value;
        setSelected(answer);
    }
    const checkAnswer = () => {
        if (selected) {
            const correct = selected === question.correctAnswer;
            setCorrectAnswer(correct);
        }
    }

    return (
      <>
        {!!question.id && (
          <div>
            <h2>
              Question #{question.id}: {question.question}
            </h2>
            {!!question.codeSnippet && (
              <Box>
                <SyntaxHighlighter language="javascript">
                  {question.codeSnippet}
                </SyntaxHighlighter>
              </Box>
            )}

            <Box>
              {Object.keys(question.answerOptions).map((option, i) => (
                <Label>
                  <Radio
                    name="selected"
                    id={option}
                    value={option}
                    onClick={handleOptionChange}
                    checked={selected === option}
                  />
                  <span>
                    <ReactMarkdown
                      source={`**${option}**: ${question.answerOptions[option]}`}
                    />
                  </span>
                  <br />
                </Label>
              ))}
            </Box>
            <Box
              style={{
                padding: ".5em 1em 1em",
                display: "flex",
                justifyContent: "space-between",
                maxWidth: 400,
              }}
            >
              <Button variant="primary" 
                mr={2} 
                onClick={checkAnswer}
                disabled={selected===null}
                sx={styles.submitButton}
              >
                Submit
              </Button>
              {correctAnswer !== null && (
                <>
                  {correctAnswer === true && (
                    <Text
                      fontWeight="bold"
                      fontSize={3}
                      style={{ color: "#2e7d32" }}
                    >
                      Correct! The answer is {question.correctAnswer}
                    </Text>
                  )}
                  {correctAnswer === false && (
                    <Text
                      fontWeight="bold"
                      fontSize={3}
                      style={{ color: "#bf360c" }}
                    >
                      Incorrect! Try again
                    </Text>
                  )}
                </>
              )}
            </Box>
            <Box sx={{ minHeight: 60 }}>
              {correctAnswer !== null && (
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      backgroundColor: "#F5F5FA",
                      alignItems: "center",
                      padding: ".5em",
                      borderRadius: ".25em",
                    }}
                  >
                    <Text fontWeight="bold" fontSize={3} color="primary">
                      Answer Explanation
                    </Text>
                    <Button
                      onClick={() => setExplanationOpen(!explanationOpen)}
                    >
                      {!explanationOpen ? "Show" : "Hide"}
                    </Button>
                  </div>
                  {explanationOpen && (
                    <div
                      style={{ padding: ".75em", backgroundColor: "#FAFAFA" }}
                    >
                      <Text fontSize={2} style={{ padding: ".5rem 0" }}>
                        <b>Correct Answer: </b>
                        {question.correctAnswer}
                      </Text>
                      <ReactMarkdown
                        source={question.answerExplanation}
                        escapeHtml={false}
                      />
                    </div>
                  )}
                </div>
              )}
            </Box>
          </div>
        )}
      </>
    );
}

