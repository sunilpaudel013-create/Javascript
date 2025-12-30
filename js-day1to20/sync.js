// function hello()
// {
//     console.log("hello");
// }

// console.log("one")
// console.log("two")

// setTimeout(hello, 5000);

// console.log("three")
// console.log("four")

//function callback- function inside another function
// function sum(a, b)
// {
//     console.log(a+b);
// }

// function calculator(a,b, sumCallback)
// {
//     sumCallback(a,b);
// }

// calculator(1,2,sum);

// concept of callback hell
function getData(id, getNextdata)
{
    setTimeout(()=>
    {
        console.log("data with the data id ",id);
        if(getNextdata){
        getNextdata();
        }
    },2000);
}
getData(1,() => {
    getData(2,() =>{
        getData(3);
    });
});

//data 1
//data2
//data3


