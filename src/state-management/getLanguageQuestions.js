import { getActiveLangName, getActiveLangQuestions } from "./localStorageFns";
export default async function getLanguageQuestions(lang){
    //check if language is in local storage
    if(getActiveLangName() === lang) return getActiveLangQuestions();
    
    const res = await fetch(`https://api.javascript-trivia.com/${lang}/`);
    if(res.ok){
        const {questions} = await res.json();
        setActiveLangQuestions(questions);
        return questions;
    } else{
        return ({"error": "There was an error getting the questions. Please try again later."})
    }
}