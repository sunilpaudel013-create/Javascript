const url = "https://catfact.ninja/facts";


// const getFacts = async ()=>{
// let response= await fetch(url);
// console.log(response.status); // JSON format
// console.log("json object");
// let data= await response.json();
// console.log(data);
// const factpara = document.querySelector(".fact");
// factpara.innerText = data;

// }
// getFacts();
 


const btn = document.querySelector('.btn');
const fact = document.querySelector('.fact');

const getFacts = async () => {
  const response = await fetch(url);
  const data = await response.json();

  const randomIndex = Math.floor(Math.random() * data.data.length);
  fact.innerText = data.data[randomIndex].fact;
};

btn.addEventListener("click", getFacts);
