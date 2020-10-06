var colorElement = document.getElementsByClassName("color");
var textElemet = document.getElementById('text');
    colorElement[0].addEventListener('click', function () {
        textElemet.style.color = "green";
    })
    colorElement[1].addEventListener('click', function () {
        textElemet.style.color = "red";
    })
    colorElement[2].addEventListener('click', function () {
        textElemet.style.color = "blue";
    })