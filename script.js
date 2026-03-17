function login() {
  var user = document.getElementById("username").value.trim();
  var pass = document.getElementById("password").value.trim();

  if(user === "admin" && pass === "1234") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html"; // must exist in same folder
  } else {
    document.getElementById("error").innerText = "Invalid login";
  }
}

function checkLogin() {
  if(localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html"; // redirect to login
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html"; // redirect to login
}
