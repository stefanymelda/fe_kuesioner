import { get } from "https://bukulapak.github.io/api/process.js";
import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "./table.js";
let urlAPI = "https://jaehyun.herokuapp.com/kuesioner";
get(urlAPI, isiTableKuesioner);
function isiTableKuesioner(results) {
  results.forEach(isiRow);
}
function isiRow(value) {
  let content = isiTabel
    .replace("#NAMA#", value.biodata.nama)
    .replace("#NOHP#", value.phone_number)
    .replace("#JENISKELAMIN#", value.biodata.jenis_kelamin)
    .replace("#EMAIL#", value.biodata.email)
    .replace("#USIA#", value.usia)
    .replace("#STATUS#", value.status)
    .replace("#LOKASI#", value.biodata.location)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabel", content);
}
