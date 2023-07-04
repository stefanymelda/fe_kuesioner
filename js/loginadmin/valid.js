import { getValue } from "https://bukulapak.github.io/element/process.js";

export function validasiInput() {
  var longitude = parseFloat(getValue("longitude"));
  var latitude = parseFloat(getValue("latitude"));
  var location = getValue("location");
  var email= getValue("email");
  var status = getValue("status");
  var nama = getValue("nama");
  var jenis_kelamin = getValue("jenis_kelamin");
  var usia = parseFloat(getValue("usia"));
  var email = getValue("email");
  var phone_number = getValue("phone_number");
  

  if (
    isNaN(longitude) ||
    isNaN(latitude) ||
    isNaN(location) ||
    isNaN(email) ||
    isNaN(status) ||
    nama.trim() === "" ||
    jenis_kelamin.trim() === "" ||
    usia.trim() === "" ||
    email.trim() === "" ||
    phone_number.trim() === ""
  ) {
    alert("Eitss..Wajib Diisi!!");
    return false;
  }
  return true;
}