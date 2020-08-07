import lsFunctions from "./localStorageFns";
import fetchLanguageQuestions from "./fetchLanguageQuestions";
const {
  setActiveLangName,
  setActiveLangQuestions,
  setActiveLanguageAnswered,
  setActiveQuestionNum,
  getActiveLangName,
  getActiveLangQuestions,
  getActiveLangAnswered,
  getActiveQuestionNum,
} = lsFunctions;

export default async function resetGameState(lang) {
    let activeLanguage, activeLangQuestions, activeLangAnswered, activeQuestionNum;
    if(lang){ 
        activeLanguage = lang;
        activeLangQuestions = await fetchLanguageQuestions(activeLanguage);
        activeLangAnswered = [];
        activeQuestionNum = 1;
    } else {
        activeLanguage = getActiveLangName() || "en";
        activeLangQuestions = getActiveLangQuestions() || [];
        activeLangAnswered = getActiveLangAnswered() || [];
        activeQuestionNum = getActiveQuestionNum() || 1;

        if (!activeLangQuestions.length) {
            activeLangQuestions = await fetchLanguageQuestions(activeLanguage);
        }
    }
    setActiveLangName(activeLanguage);
    setActiveLangQuestions(activeLangQuestions);
    setActiveLanguageAnswered(activeLangAnswered);
    setActiveQuestionNum(activeQuestionNum);
    return {
      activeLanguage,
      activeLangQuestions,
      activeLangAnswered,
      activeQuestionNum,
    };
  
}
