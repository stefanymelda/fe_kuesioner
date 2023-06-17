const urlParams = new URLSearchParams(window.location.search);
const kuesionerId = urlParams.get("kuesionerId");

export let urlPUT = "https://jaehyun.herokuapp.com/update" + kuesionerId;

export function AmbilResponse(result) {
  console.log(result); // menampilkan response API pada console
  alert(result.message); // menampilkan response API pada alert
  window.location.href = "index.html"; // reload halaman setelah klik ok pada alert
}
