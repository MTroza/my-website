// // ✅ Your API (use this!)
const API_URL = "https://script.google.com/macros/s/AKfycbzDJL_LPM6rSpKN1d4LfNFuQqXxFS3m4cnQt64W-0x7s9EmOZ58PxpW0qDvA_L8bdLw/exec";

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const btn = document.querySelector("button");

  if (!username || !password) {
    alert("Please enter username and password");
    return;
  }

  // ✅ SHOW LOADING
document.getElementById("loadingOverlay").style.display = "flex";

// ✅ DISABLE BUTTON
btn.disabled = true;

// 🔥 FORCE RENDER FIRST
setTimeout(() => {

  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(data => {

    document.getElementById("loadingOverlay").style.display = "none";
    btn.disabled = false;

    if (data.success) {
      localStorage.setItem("user", username);
      localStorage.setItem("role", data.role || "User");
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid username or password");
    }

  })
  .catch(err => {
    document.getElementById("loadingOverlay").style.display = "none";
    btn.disabled = false;

    alert("Connection error");
    console.error(err);
  });

}, 100); // small delay ensures UI updates
  
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
