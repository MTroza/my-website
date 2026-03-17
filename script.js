fetch("YOUR_WEB_APP_URL?action=login&username=" + user + "&password=" + pass)
  .then(res => res.text())
  .then(data => {
    if (data == "success") {
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("error").innerText = "Invalid Username or Password";
    }
  });
