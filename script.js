// ✅ Your API (same everywhere)
const API_URL = "https://script.google.com/macros/s/AKfycbxj-grklficM1_uUzUgfds_26WuawLURx69uquAUQrt-Le5ZpjeNBfd3hl6HWw7Gui-KQ/exec";


// =======================
// 🔐 LOGIN FUNCTION
// =======================
function login() {

  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  document.getElementById("error").innerText = "";

  if(user === "" || pass === ""){
    document.getElementById("error").innerText = "Please enter username and password";
    return;
  }

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "login",
      username: user,
      password: pass
    })
  })
  .then(res => res.json())
  .then(data => {

    if(data.status === "success"){

      // ✅ Store user session (MATCHES dashboard.html)
      localStorage.setItem("user", user);
      localStorage.setItem("role", data.role || "User");

      window.location.href = "dashboard.html";

    } else {
      document.getElementById("error").innerText = "Invalid Username or Password";
    }

  })
  .catch(()=>{
    document.getElementById("error").innerText = "Connection error";
  });

}


// =======================
// 🔒 CHECK LOGIN (Dashboard Protection)
// =======================
function checkLogin() {

  const user = localStorage.getItem("user");

  if(!user){
    window.location.href = "index.html";
  } else {
    const role = localStorage.getItem("role") || "User";

    const welcome = document.getElementById("welcomeText");
    if(welcome){
      welcome.innerText = `Welcome, ${user} (${role}) 👋`;
    }

    document.body.style.display = "block";
  }
}


// =======================
// 🚪 LOGOUT
// =======================
function logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("role");
  window.location.href = "index.html";
}


// =======================
// 📂 DASHBOARD SECTIONS
// =======================
function showSection(section){

  const content = document.getElementById("content");

  if(!content) return;

  if(section === "home"){
    content.innerHTML = `
      <h1>Welcome</h1>
      <p>This is your DocHub dashboard.</p>
    `;
  }

  else if(section === "projects"){
    content.innerHTML = `
      <h2>📁 Projects</h2>
      <p>List of projects will appear here.</p>
    `;
  }

  else if(section === "directory"){
    content.innerHTML = `
      <h2>📊 Directory</h2>
      <p>Directory database here.</p>
    `;
  }

  else if(section === "photos"){
    content.innerHTML = `
      <h2>📷 Photo Documentation</h2>
      <p>Gallery will appear here.</p>
    `;
  }

  else if(section === "repository"){
    content.innerHTML = `
      <h2>📂 Document Repository</h2>
      <input type="file" multiple>
      <button>Upload</button>
    `;
  }

  else if(section === "notes"){
    content.innerHTML = `
      <h2>📝 Notes</h2>
      <textarea placeholder="Write notes..." style="width:100%; height:100px;"></textarea>
      <button>Save</button>
    `;
  }

}
