function login(){

var user = document.getElementById("username").value;
var pass = document.getElementById("password").value;

if(user === "admin" && pass === "1234"){

localStorage.setItem("loggedIn","true");

window.location.href="dashboard.html";

}else{

document.getElementById("error").innerText="Invalid login";

}

}

function checkLogin(){

if(localStorage.getItem("loggedIn") !== "true"){

window.location.href="login.html";

}

}

function logout(){

localStorage.removeItem("loggedIn");

window.location.href="login.html";

}