// write a program to factorial of the number us\
// using the reduce and for loops

let number = prompt("enter the number");
let factorial =1;

for(let i =number;i>=1;i--)
{
    factorial *=i;
}
console.log(`result is ${factorial}`);