function checkLogin(){

var loggedIn = localStorage.getItem("loggedIn");

if(loggedIn !== "true"){
    
    window.location.href = "index.html"; // go back to login page
    
}

}

function logout(){

localStorage.removeItem("loggedIn");

window.location.href = "index.html"; // redirect to login page

}
