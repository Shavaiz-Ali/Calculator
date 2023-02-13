

function number(num){
    let result = document.getElementById("input");
    result.value += num;
}
function result(){
    let result = document.getElementById("input");
    result.value = eval(result.value);
}
function reset(){
    let result = document.getElementById("input");
    result.value = "";
}
function removeel(){
   let number = document.getElementById("input");
   let remove = number.value;
   remove = remove.slice(0,-1);
    number.value = remove;
}