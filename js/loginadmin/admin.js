function loginAdmin(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var target_url = "https://jaehyun.herokuapp.com/loginadm";
  
    var data = {
      username: username,
      password: password,
    };
  
    var raw = JSON.stringify(data);
  
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    fetch(target_url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result.message);
        console.log(result.status);
        if (result.status === 200) {
          window.location.href = "index.html";
        }
      })
      .catch((error) => console.log("Error:", error));
      
  }
  document.getElementById("logadm").addEventListener("submit", loginAdmin);
  document.onkeydown = function (e) {
  if (e.key === "Enter") {
    loginAdmin()
  }
};