import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse } from "../config/url_put.js";

function pushData() {
//   var hari_kerja = getValue("hari_kerja");
// console.log(getValue("email"));

let data = {
    // longitude: parseFloat(getValue("longitude")),
    // latitude: parseFloat(getValue("latitude")),
    location: getValue("location"),
    email: getValue("email"),
    // status: getValue("status"),
    biodata: {
      nama: getValue("nama"),
      jenis_kelamin: getValue("jenis_kelamin"),
      usia: parseFloat(getValue("usia")),
      email: getValue("email"),
      phone_number: getValue("phone_number")
    }
  }
  putData(urlPUT, data, AmbilResponse);
}

onClick("button", pushData);
