
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

function showSection(section){

  const content = document.getElementById("content");

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
function checkLogin() {
  if(localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html"; // redirect to login
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html"; // redirect to login
}
