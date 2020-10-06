let bodyElement =document.querySelector('body');
bodyElement.addEventListener('click', function(e){
    if(e.target.id === "hide"){
        document.getElementById('texte').style.display = "none";
    }
    if(e.target.id === "show"){
        document.getElementById("texte").style.display = "block";
    }
})