import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url_post.js";
import { validasiInput } from "../extra/valid.js";

function pushData() {

  if (!validasiInput()) {
    return;
  }

  console.log(getValue("email"));


  let data = {
    longitude: parseFloat(getValue("longitude")),
    latitude: parseFloat(getValue("latitude")),
    location: getValue("location"),
    email: getValue("email"),
    status: getValue("status"),
    biodata: {
      nama: getValue("nama"),
      jenis_kelamin: getValue("jenis_kelamin"),
      usia: parseFloat(getValue("usia")),
      email: getValue("email"),
      phone_number: getValue("phone_number")
    }
  }
  postData(urlPOST, data, AmbilResponse);
}

onClick("button", pushData);
