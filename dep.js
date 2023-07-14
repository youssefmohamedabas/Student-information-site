function validate() {
    var slevel = document.forms["myform"]["level"].value;
    if (slevel != 3) {
        alert("Invalid level!")
        return false;
    }
}