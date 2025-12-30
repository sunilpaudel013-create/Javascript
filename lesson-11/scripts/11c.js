
const number = [1,20,22,24,5];
const greet = ['hi','hello','good']

// function to swap first and last value of the array
function arraySwap(a)
{
    const lastIndex = a.length -1;
    const lValue = a[lastIndex];
    a[lastIndex]= a[0];
    console.log(`at last : ${a[lastIndex]}`);

    a[0]= lValue;
    console.log(a);
}

arraySwap(number);
arraySwap(greet);