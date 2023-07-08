import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url_post_survey.js";
import { validasiInputS } from "../extra/valid_survey.js";

function pushData() {

  if (!validasiInputS()) {
    return;
  }

  console.log(getValue("title"));


  let data = {
    kode: parseInt(getValue("kode")),
    title: getValue("title"),
    soal: {
      nomor: parseInt(getValue("nomor")),
      text: getValue("text"),
      options: getValue("options"),
    }
  }
  postData(urlPOST, data, AmbilResponse);
}

onClick("button", pushData);
