let shoeSize = window.prompt('Enter shoe size');
let birthYear = window.prompt('Enter your birthyear');
function calc(shoeSize, birthYear){
   let res = shoeSize*2;
   res +=5;
   res -= birthYear
   res +=1766;
   return res;
}
alert(calc(shoeSize, birthYear));