// https://script.google.com/macros/s/AKfycbwSxDvkLohUQHGzW2xFkOst7iay3OZckKksecH1m7Q/dev
const API_URL = "https://script.google.com/macros/s/WEB_APP_ID/exec";

function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const errorEl = document.getElementById("error");

  errorEl.innerText = "";

  if (user === "" || pass === "") {
    errorEl.innerText = "Please enter username and password";
    return;
  }

  
  fetch(`${API_URL}?action=login&username=${encodeURIComponent(user)}&password=${encodeURIComponent(pass)}`)
    .then(response => response.text())
    .then(res => {
      if (res === "success") {
       
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", user);
       
        window.location.href = "dashboard.html";
      } else if (res === "failed") {
        errorEl.innerText = "Invalid username or password";
      } else {
        errorEl.innerText = "Server error: " + res;
      }
    })
    .catch(err => {
      errorEl.innerText = "Error connecting to server";
      console.error(err);
    });
}


function checkLogin() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }
}


function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("username");
  window.location.href = "login.html";
}
