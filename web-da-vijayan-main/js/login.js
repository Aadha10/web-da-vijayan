function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var usernameRegex = /^[a-zA-Z]+$/;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    var valid = true;
    if (!username.match(usernameRegex)) {
        document.getElementById("usernameError").innerHTML = "Username can only contain alphabets.";
        valid = false;
    } else {
        document.getElementById("usernameError").innerHTML = "";
    }

    if (!password.match(passwordRegex)) {
        document.getElementById("passwordError").innerHTML = "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.";
        valid = false;
    } else {
        document.getElementById("passwordError").innerHTML = "";
    }

    return valid;
}

function authenticateUser() {
if (!validateForm()) {
return;
}

var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

var http_request = new XMLHttpRequest();
http_request.onreadystatechange = function() {
if (http_request.readyState == 4) {
    if (http_request.status == 200) {
        var response = JSON.parse(http_request.responseText);
        var users = response.user;
        var match = users.find(user => user.username === username && user.password === password);
        if (match) {
            alert("Login Successful!");
            window.location.href="index.html";
        } else {
            alert("Login failed. Please check your username and password.");
        }
    } else {
        document.getElementById("message").innerHTML = "Error: " + http_request.status;
    }
}
};

http_request.open("GET", "/my/da_web/web-da-vijayan-main/data.json", true);
http_request.send();
}
