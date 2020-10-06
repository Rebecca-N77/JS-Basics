let password = document.querySelector("#password");
let confirm = document.querySelector("#confirmation");
let button = document.querySelector("button");

let change_border = function() {

 if(password.value !== confirm.value) {
    password.style.border = "2px solid red";
    confirm.style.border = "2px solid red";
   } 
  }
 button.addEventListener("click", change_border);