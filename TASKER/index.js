

document.getElementById("login-button").addEventListener("click", login);

function login(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value; 
    
    var storageDetails = new Array();
    storageDetails = JSON.parse(localStorage.getItem("login")) || [];
    if(storageDetails.some((check) =>{
        return check.email == email && check.password == password;
    })){
        window.location.assign("home.html");
    }
    else{
        alert("Email and Password does not match!")
    }
}