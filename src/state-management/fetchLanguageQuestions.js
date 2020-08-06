export default async function fetchLanguageQuestions(lang){

    console.log("lang is...", lang)
    const res = await fetch(`https://api.javascript-trivia.com/${lang}/`);
    if(res.ok){
        const {questions} = await res.json();
        return questions;
    } else{
        return ({"error": "There was an error getting the questions. Please try again later."})
    }
}