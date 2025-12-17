/* function getLastValue(array) that makes an array and returns
the last value in the array. */

const number = [1,10,22,24,5];
const greet = ['hi','hello','good'];
function getLastValue(a)
{
    const len = a.length;
    const lastIndex = len -1;
    const lastvalue = a[lastIndex];
    console.log(lastvalue);
}

getLastValue(number);
getLastValue(greet);


