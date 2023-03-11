function titleModify() {
    document.getElementById("title").innerHTML = "Comecemos logo então!";
}

function positionRandom() {
    var newTopValue = valueTopRandom();
    var newLeftValue = valueLeftRandom();

    document.getElementById("no").style.top = "" + newTopValue + "%";
    document.getElementById("no").style.left = "" + newLeftValue + "%";

}

function valueTopRandom() {
    return Math.random() * (80 - 0) + 0;
}

function valueLeftRandom() {
    return Math.random() * (80 - 0) + 0;
}