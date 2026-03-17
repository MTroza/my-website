// Login function
function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  // Hardcoded credentials for now
  if(user === "admin" && pass === "1234") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html"; // redirect to dashboard
  } else {
    document.getElementById("error").innerText = "Invalid login";
  }
}

// Check login status on dashboard
function checkLogin() {
  if(localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html"; // redirect to login
  }
}

// Logout function
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html"; // redirect to login
}

// Call checkLogin on dashboard page load
if(window.location.pathname.endsWith("dashboard.html")) {
  checkLogin();
}

// Module switching
function showModule(module) {
  const main = document.getElementById('mainContent');
  if(module === 'repository') {
    main.innerHTML = `
      <h2 class="text-xl font-bold mb-4">📂 Document Repository</h2>
      <input type="file" id="fileUpload" multiple class="mb-2 p-2 border rounded"/>
      <button onclick="uploadFiles()" class="bg-blue-500 text-white px-4 py-2 rounded">Upload</button>
      <div id="fileList" class="mt-4"></div>
    `;
  }
  // Add similar blocks for gallery, notes, directory, search
}

function uploadFiles() {
  const files = document.getElementById('fileUpload').files;
  const list = document.getElementById('fileList');
  for(let i = 0; i < files.length; i++){
    list.innerHTML += `<p>${files[i].name}</p>`;
    // TODO: Upload to Google Drive via Apps Script
  }
}
