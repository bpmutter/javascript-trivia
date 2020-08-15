import React, {useContext, useEffect} from "react";
import Question from './Question';
import GameNavigation from './GameNavigation';
import context from './Context';

export default function Game() {
  const {
    activeQuestionNum,
    questions,
    language
  } = useContext(context);

  return(<>
        <GameNavigation/>
          <Question/>
  </>);
}
