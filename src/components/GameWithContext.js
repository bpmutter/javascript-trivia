import React, {useState, useEffect, useContext} from 'react';
import Context from './Context';
import Game from './Game'
import setUpGameState from '../state-management/setUpGameState';
import setActiveQuestionNum from '../state-management/setActiveQuestion';


export default function GameWithContext(){
    const [activeQuestionNum, setActiveQuestion] = useState({});
    const [language, setLanguage] = useState("");
    const [questions, setQuestions] = useState([]);
    const [questionsCompleted, setQuestionsCompleted] = useState([]);

    useEffect(()=>{
        (async()=>{
            const state = await setUpGameState();
            const {activeLanguage, activeLangQuestions, activeLangAnswered, activeQuestionNum} = state;
            setActiveQuestion(activeQuestionNum);
            setLanguage(activeLanguage);
            setQuestions(activeLangQuestions);
            setQuestionsCompleted(activeLangAnswered);
        })();
    },[]);

    const restartGame = (lang)=>{
        return 
    }
    const goToPrevQuestion = () => {
      if(activeQuestionNum > 1) {
        setActiveQuestion(activeQuestionNum - 1);
        setActiveQuestionNum(activeQuestionNum - 1);

    };
    };
    const goToNextQuestion = () => {
        if (activeQuestionNum < questions.length) {
            setActiveQuestion(activeQuestionNum + 1);
            setActiveQuestionNum(activeQuestionNum + 1);
        }
    };
    const goToRandomUnvisitedQuestion = () => {
      return;
    };
    const updateQuestionsCompleted = (question, answer) => {
        return;
    }
    const context = {
      goToNextQuestion,
      goToPrevQuestion,
      goToRandomUnvisitedQuestion,
      restartGame,
      activeQuestionNum,
      language,
      questions,
      questionsCompleted,
    };
    return(
        <Context.Provider value={context}>
            <Game />
        </Context.Provider>
    )
}
