const EmailLogin = document.querySelector(".input-login-username");
const PasswordLogin = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login_signInButton");



btnLogin.addEventListener("click", function (e) {
    e.preventDefault();
    if(EmailLogin.value === "" || PasswordLogin.value === ""){
        alert("Please enter Email or Password")

    }else{
        var user = JSON.parse(localStorage.getItem(EmailLogin.value));
        if(
            user.email === EmailLogin.value && 
            user.password === PasswordLogin.value
        ){
            window.location.href = "index.html";
        }else{
            alert("sai mat khau roi ngu vcl") 
        }
    }
})