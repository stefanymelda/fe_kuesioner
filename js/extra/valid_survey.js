import { getValue } from "https://bukulapak.github.io/element/process.js";

export function validasiInputS() {
  var kode = parseInt(getValue("kode"));
  var title = getValue("title");
  var nomor = parseInt(getValue("nomor"));
  var text= getValue("text");
  var options = getValue("options");

  
  // console.log((getValue("latitude")==""))
  if (kode != "" && title!="" && nomor !="" && text !="" && options !="") {
	return true;
  }else{
	alert('Data was empty, you must fill completely!!');
  }

}