function validate() {
    //var un = document.forms["myform"]["uname"].value;
    // var pw = document.forms["myform"]["p"].value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {

        alert("Login Succefuly");
        window.location.assign("http://google.com");
        //window.location.replace("http://stackoverflow.com")
        //window.location.assign("https://www.youtube.com/watch?v=SOLHcE3bnOU");

        return true;
    }

    else {
        alert("login failed");
        return false;
    }
}