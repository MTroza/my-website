// Login function
function login() {
  var user = document.getElementById("username").value.trim(); // trim spaces
  var pass = document.getElementById("password").value.trim();

  if(user === "admin" && pass === "1234") {
    // Set logged in flag
    localStorage.setItem("loggedIn", "true");

    // Redirect to dashboard
    window.location.href = "dashboard.html"; 
  } else {
    document.getElementById("error").innerText = "Invalid login";
  }
}

// Check login status (run on dashboard page)
function checkLogin() {
  if(localStorage.getItem("loggedIn") !== "true") {
    // Not logged in → redirect to login page
    window.location.href = "login.html"; 
  }
}

// Logout function
function logout() {
  // Remove login flag
  localStorage.removeItem("loggedIn");

  // Redirect to login page
  window.location.href = "login.html"; 
}
