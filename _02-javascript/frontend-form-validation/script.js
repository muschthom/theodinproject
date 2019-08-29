let email = document.getElementById("email");

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I expect an e-mail, darling!");
    } else {
        email.setCustomValidity("");
    }
});

let emailConfirm = document.getElementById("email-confirm");

emailConfirm.addEventListener("input", function (event) {
    let email = document.getElementById("email").value;
    let emailConformation = emailConfirm.value;
    
    if (email === emailConformation){
        emailConfirm.setCustomValidity("");
    } else {
        emailConfirm.setCustomValidity("I expect the same e-mail, darling!");

    }
});

let password = document.getElementById("password");

password.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I expect an 8 or more characters with at least one number, and one uppercase and lowercase character password, darling!");
    } else {
        email.setCustomValidity("");
    }
});

let passwordConfirm = document.getElementById("password-confirm");

passwordConfirm.addEventListener("input", function (event) {
    let password = document.getElementById("password").value;
    let passwordConformation = passwordConfirm.value;

    if (password === passwordConformation){
        passwordConfirm.setCustomValidity("");
    } else {
        passwordConfirm.setCustomValidity("I expect the same password, darling!");

    }
});