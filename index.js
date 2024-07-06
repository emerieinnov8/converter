
const textbox = document.getElementById('textbox');
const toFarenheit =document.getElementById('toFarenheit');
const toCelsius=document.getElementById('toCelsius');
const Result =document.getElementById('Result');
let temp;
function convert(){
if (toFarenheit.checked){
    temp = Number(textbox.value);
    temp= temp*9/5+32;
    Result.textContent = temp +"°F";

    

}


else if(toCelsius.checked){
    temp = Number(textbox.value);
    temp= (temp-32)+5/9;
    Result.textContent = temp +"°C";

}
else{
    Result.textContent = 'select a unit ';
}
}