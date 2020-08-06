
function setActiveLangName(name){
    localStorage.setItem("activeLangName", name);
}

function setActiveLangQuestions(questionArr){
    localStorage.setItem("questions", JSON.stringify(questionArr));
    localStorage.setItem("numQuestions", questionArr.length)
}

function setActiveLanguageAnswered(questionId, val){
    const activeLanguageAnswered = [];
    if(!localStorage.getItem("activeLanguageAnswered")){
      const numQuestions = parseInt(localStorage.getItem("numQuestions")) || 0;
      activeLanguageAnswered = Array(numQuestions).fill(null); 
    } else{
        activeLanguageAnswered = JSON.parse(localStorage.getItem("questions"));
    }
    const questionIdx = questionId - 1;
    activeLanguageAnswered[questionIdx] = val;
}
function setActiveQuestionNum(num) {
  localStorage.setItem("activeQuestionNum", num);
}

function getActiveLangName(){
    return localStorage.getItem("activeLangName");
}
function getActiveLangQuestions() {
  return JSON.parse(localStorage.getItem("questions"));
}
function getActiveLangNumQuestions() {
  return JSON.parse(localStorage.getItem("numQuestions"));
}
function getActiveLangAnswered() {
  return JSON.parse(localStorage.getItem("activeLangAnswered"));
}
function getActiveQuestionNum(){
  return JSON.parse(localStorage.getItem("activeQuestionNum"));
}




const exports = {
  setActiveLangName,
  setActiveLangQuestions,
  setActiveLanguageAnswered,
  setActiveQuestionNum,
  getActiveLangName,
  getActiveLangQuestions,
  getActiveLangNumQuestions,
  getActiveLangAnswered,
  getActiveQuestionNum,
};
export default exports;