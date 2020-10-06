let  new_message =document.getElementById('new-message');

let name = document.getElementById('name');

name.addEventListener('keyup',function(){
   new_message.innerHTML = name.value;
})
