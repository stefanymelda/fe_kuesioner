import { getValue } from "https://bukulapak.github.io/element/process.js";

export function validasiInput() {
  // var longitude = parseFloat(getValue("longitude"));
  // var latitude = parseFloat(getValue("latitude"));
  var location = getValue("location");
  var email= getValue("email");
  // var status = getValue("status");
  var nama = getValue("nama");
  var jenis_kelamin = getValue("jenis_kelamin");
  var usia = parseFloat(getValue("usia"));
  var email = getValue("email");
  var phone_number = getValue("phone_number");
  
  // console.log((getValue("latitude")==""))
  if ( location !="" && email !="" && nama !="" && jenis_kelamin !="" 
  && usia !="" && email !="" && phone_number !="") {
	return true;
  }else{
	alert('Data was empty, you must fill completely!!');
  }

}