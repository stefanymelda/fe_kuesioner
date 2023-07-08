import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel, isiTabelSurvey } from "../temp/table.js";
export function isiTableKuesioner(results) {
  results.forEach(isiRow);
}
export function isiTableSurvey(results) {
  results.forEach(isiRowSurvey);
}
function isiRow(value) {
  let content = isiTabel
    .replace("#NAMA#", value.biodata.nama)
    .replace("#NOHP#", value.biodata.phone_number)
    .replace("#JENISKELAMIN#", value.biodata.jenis_kelamin)
    .replace("#EMAIL#", value.biodata.email)
    .replace("#USIA#", value.biodata.usia)
    .replace("#STATUS#", value.status)
    .replace("#LOKASI#", value.location)
    .replace("#IDEDIT#", value._id)
    .replace("#IDHAPUS#", value._id)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabel", content);
}

function isiRowSurvey(value) {
  let content = isiTabelSurvey
    .replace("#KODE#", value.kode)
    .replace("#TITLE#", value.title)
    .replace("#NOMOR#", value.soal.nomor)
    .replace("#TEXT#", value.soal.text)
    .replace("#OPTIONS#", value.soal.options)
    .replace("#IDEDIT#", value._id)
    .replace("#IDHAPUS#", value._id)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabelSurvey", content);
}
