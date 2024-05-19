
document.getElementById("reg-button").addEventListener("click", register);


function register(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var confirmPass = document.getElementById("confirm-password").value;
    var nameValid = false;
    var emailValid = false;
    var passValid = false;
    var confirmPassValid = false;



    if(name == ""){
        var nameCheck = document.getElementById("name-check");
        nameCheck.style.color="red";
        nameCheck.innerHTML = "This field should not be empty."
    }
    else{
        nameValid = true;
        var nameReact= document.getElementById("name");
        nameReact.style.borderColor = "green";


    }


    if(email.length < 10){
        var emailCheck = document.getElementById("email-check");
        emailCheck.innerHTML = "Enter a Valid Email!";
        emailCheck.style.color = "red";
    }
    else{
        emailValid = true;
        var emailReact = document.getElementById("email");
        emailReact.style.borderColor = "green";
    }
    
    passwordChecker();

    function passwordChecker(){
    const minLength = 6;
    const hasUpperCase = /[A-Z]/.test(pass);
    const hasLowerCase = /[a-z]/.test(pass);
    const hasDigit = /\d/.test(pass);
    const hasSpecialChar = /[!@#$%^&*(){}|,./<>?]/.test(pass);

    if(pass < minLength){
        var passCheck = document.getElementById("pass-check");
        passCheck.innerHTML = "Password should be between 6 and 20 characters ";
        passCheck.style.color = "red";
        
    }
    else if(!hasUpperCase){
        var passCheck = document.getElementById("pass-check");
        passCheck.innerHTML = "Password should contain atleast one uppercase letter";
        passCheck.style.color = "red";
    }

    else if(!hasLowerCase){
        var passCheck = document.getElementById("pass-check");
        passCheck.innerHTML = "Password should contain atleast one lowercase letter";
        passCheck.style.color = "red";
    }

    else if(!hasDigit){
        var passCheck = document.getElementById("pass-check");
        passCheck.innerHTML = "Password should contain atleast one digit";
        passCheck.style.color = "red";
    }

    else if(!hasSpecialChar){
        var passCheck = document.getElementById("pass-check");
        passCheck.innerHTML = "Password should contain contain atleast one special character";
        passCheck.style.color = "red";
    }
    else{
        passValid = true;
        var passReact = document.getElementById("password");
        passReact.style.borderColor = "green";
        var passCheck = document.getElementById("pass-check");
        passCheck.innerHTML = "Password is Strong";
        passCheck.style.color = "green";

        confirmPasswordChecker();
    }
    }

    function confirmPasswordChecker(){
    if(pass !== confirmPass){
        var confirmPassCheck = document.getElementById("confirm-pass-check");
        confirmPassCheck.innerHTML = "Oops!The passwords do not match.";
        confirmPassCheck.style.color = "red";
    }
    else{
        confirmPassValid = true;
        var confirmPassReact = document.getElementById("confirm-password");
        confirmPassReact.borderColor = "green";
        var confirmPassCheck = document.getElementById("confirm-pass-check");
        confirmPassCheck.innerHTML = "Passwords Matched";
        confirmPassCheck.style.color = "green";
    }
}




    if(nameValid && emailValid && passValid && confirmPassValid){
        pushDetails();
        window.location.href = "index.html";
    }
        function pushDetails(){
            
            let credentials;
            var pastValues = localStorage.getItem("login");
            if( pastValues == null){
                credentials = [];
            }
            else{
                credentials = JSON.parse(pastValues);
            }
            credentials.push(
                {
                email:email,
                password: confirmPass
                }
            );
            localStorage.setItem("login",JSON.stringify(credentials));
    }

}
