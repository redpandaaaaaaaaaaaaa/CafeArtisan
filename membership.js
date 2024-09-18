window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

function validate(){
    if(validateName()&&validateAddress()&&validateEmail()&&validateNumber()&&validatePass()&&validateGender()){
        alert("Thank You For Becoming a Member!")
        window.location.href ="./html/membership.html";
    }
}                     

function validateName(){
    var fullname = document.getElementById('fullname').value;
    if (fullname == "") {
        alert("Please input your username!")
        return false;
    } 
    return true;
}

function validateAddress(){
    var address = document.getElementById('address').value;
    if (address == "") {
        alert("Please input your address!")
        return false;
    
    } 
    return true;
}

function validateEmail(){
    var email = document.getElementById('email').value;
    if (email == "") {
        alert("Please input your email!")
        return false;
    }
    if (!email.includes("@")) {
        alert("Wrong input for your email!")
        return false;
    }
    return true;
}

function validateNumber(){
    var number = document.getElementById('number').value;
    if (number == ""){
        alert("Please input your number!")
        return false;
    }
    return true;
}

function validatePass(){
    var password = document.getElementById('password').value;
    if (password == ""){
        alert("Please input your password!")
        return false;
    }
    return true;
}

function validateGender(){
    var gender = document.getElementById('gender').value;
    if (gender == ""){
        alert("Wrong input for your gender!")
        return false;
    }
    return true;
}