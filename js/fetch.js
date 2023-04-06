import { get } from "https://bukulapak.github.io/api/process.js";
import { setInner } from "https://bukulapak.github.io/element/process.js";
let urlAPI = "https://jaehyun.herokuapp.com/kuesioner";
get(urlAPI, isiTableKuesioner);
function isiTableKuesioner(results) {
  console.log(results);
  results.forEach(isiRow);
}
function isiRow(value) {
  console.log(value);
}
