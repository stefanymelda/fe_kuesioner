import { get } from "https://bukulapak.github.io/api/process.js";
let urlAPI = "https://jaehyun.herokuapp.com/kuesioner";
get(urlAPI, isiTableKuesioner);
function isiTableKuesioner(results) {
  console.log(results);
}
