// Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const kuesionerId = urlParams.get("kuesionerId");

export let urlFetch = "https://jaehyun.herokuapp.com/kuesioner/" + kuesionerIdId;
