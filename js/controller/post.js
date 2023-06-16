import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url_post.js";

function pushData() {
  // var biodata = getValue("biodata");

  let data = {
    longitude: parseFloat(getValue("longitude")),
    latitude: parseFloat(getValue("latitude")),
    location: getValue("location"),
    email: getValue("email"),
    status: getValue("status"),
    biodata: {
      nama: getValue("nama"),
      jenis_kelamin: getValue("jenis_kelamin"),
      usia: getValue("usia"),
      email: getValue("email"),
      phone_number: getValue("phone_number")
    },
  };
  postData(urlPOST, data, AmbilResponse);
}

onClick("button", pushData);
