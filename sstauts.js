function validate() {
    alert("info has been save")
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("info").deleteRow(i);
}