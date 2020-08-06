import React, { useState, useContext } from "react";
import Question from './Question';
import GameNavigation from './GameNavigation';
import LanguageQuestionsCompleted from './LanguageQuestionsCompleted';

export default function GameWithContext() {
  return(<>
    <GameNavigation/>
    <Question/>
    <LanguageQuestionsCompleted/>
  </>);
}
