let random = Math.random();

let a= prompt("Enter the first number:");
let b= prompt("Enter the second number");
let c= prompt("Enter the operations:");

let obj ={
    "+":"-",
    "-":"+",
    "/":"*",
    "*":"/",

}
if(random >0.1){
    //perform the correct calulation
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);

}
else
{
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);

}

