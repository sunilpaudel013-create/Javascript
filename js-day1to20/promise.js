// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("i am a promise");
//         resolve("i am a promise");
//     }); // <--- Added this closing brace
// };

// let promise = getPromise();
// promise.then(() => {
//     console.log("promise fulfilled");
// });

//
// function asyncFunc()
// {
//     return new Promise((resolve, reject)=>
//     {
//         setTimeout(()=>{
//             console.log("some data1");
//             resolve("success");
//         },2000);
//     })
// }
// console.log("fetching the data1");
// let promise = asyncFunc();
// promise.then((res)=>{
//     console.log(res);
// })



function api()
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>
        {
            console.log("weather data");
            resolve(200);
        },2000);
    });
}

async function getWeatherdata()
{
    await api();
}