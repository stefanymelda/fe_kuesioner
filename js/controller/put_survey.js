import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse } from "../config/url_put_survey.js";

function pushData() {
//   var hari_kerja = getValue("hari_kerja");
// console.log(getValue("email"));

let data = {
    kode: parseInt(getValue("kode")),
    title: getValue("title"),
    soal: {
      nomor: parseInt(getValue("nomor")),
      text: getValue("text"),
      options: getValue("options"),
    }
  }
  putData(urlPUT, data, AmbilResponse);
}

onClick("button", pushData);
