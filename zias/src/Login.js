$("#login-button").click(function (event) {
    event.preventDefault();

    var email = $("email").val;
    var pass = $("pass").val;
    if ((email && pass) != "") {

        window.location.replace("ibm.html")
    } else {
        alert("Invalid Email or Password. Please try again!");
    }
});