const urlParams = new URLSearchParams(window.location.search);
const surveyId = urlParams.get("surveyId");

export let urlPUT = "https://jaehyun.herokuapp.com/updatesurvey/" + surveyId;

export function AmbilResponse(result) {
  console.log(result); // menampilkan response API pada console
  alert(result.message); // menampilkan response API pada alert
  window.location.href = "survey.html"; // reload halaman setelah klik ok pada alert
}
