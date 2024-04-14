var emailSignUp = document.querySelector(".input-signup-username");
var passSignUp = document.querySelector(".input-signup-password");
var btnSignUp = document.querySelector(".signup__signInButton");
btnSignUp.addEventListener("click", function (){
    if (emailSignUp.value === "" || passSignUp.value === ""){
        alert("Please enter email or password !");

    }else{
        var user={
            email: emailSignUp.value,
            password:passSignUp.value

        }
    }
    let jsonUser = JSON.stringify(user);
    localStorage.setItem(emailSignUp.value, jsonUser);
    // alert("success");
    // alert(emailSignUp.value);
    // alert(passSignUp.value);
})
