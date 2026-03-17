fetch("https://script.google.com/macros/s/AKfycby_Uz0yhgwt5FkDoPEldfHDyxUSSVyQZbda3X7HeEbe/dev?action=login&username=" + user + "&password=" + pass)
  .then(res => res.text())
  .then(data => {
    if (data == "success") {
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("error").innerText = "Invalid Username or Password";
    }
  });
