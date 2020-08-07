import lsFunctions from "./localStorageFns";
import fetchLanguageQuestions from './fetchLanguageQuestions';
const {
  setActiveLangName,
  setActiveLangQuestions,
  setActiveLanguageAnswered,
  setActiveQuestionNum,
  getActiveLangName,
  getActiveLangQuestions,
  getActiveLangNumQuestions,
  getActiveLangAnswered,
  getActiveQuestionNum,
} = lsFunctions;

export default async function setUpGameState(){
    const activeLanguage = getActiveLangName() || 'en';
    let activeLangQuestions = getActiveLangQuestions() || [];
    const activeLangAnswered = getActiveLangAnswered() || [];
    const activeQuestionNum = getActiveQuestionNum() || 1;

    if(!activeLangQuestions.length){
        activeLangQuestions = await fetchLanguageQuestions(activeLanguage);
        
    }
    setActiveLangName(activeLanguage);
    setActiveLangQuestions(activeLangQuestions);
    setActiveLanguageAnswered(activeLangAnswered);
    setActiveQuestionNum(activeQuestionNum);
    return {activeLanguage, activeLangQuestions, activeLangAnswered, activeQuestionNum}

}