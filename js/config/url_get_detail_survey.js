// Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const surveyId = urlParams.get("surveyId");

export let urlFetch = "https://jaehyun.herokuapp.com/survey/" + surveyId;
