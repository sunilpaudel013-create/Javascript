// create a business name generator by combining list of adjectives and 
// shop name and another word
/*
crazy amazing fire, 
engine food garmets 
bros limited hub */

let random1 = Math.floor(Math.random()*3) +1;
let random2 = Math.floor(Math.random()*3) +1;
let random3 = Math.floor(Math.random()*3) +1;

let r1,r2,r3;
if(random1 === 1)
{
    r1 = 'crazy';
}
else if(random1 === 2)
{
    r1 = 'amazing';
}
else{
    r1 = 'fire';
}

if(random1 === 1)
{
    r2 = 'engine';
}
else if(random1 === 2)
{
    r2 = 'foods';
}
else{
    r2 = 'garmets';
}

if(random1 === 1)
{
    r3 = 'bros';
}
else if(random1 === 2)
{
    r3 = 'limited';
}
else{
    r3 = 'hubs';
}

function nameGenerator(r1,r2, r3)
{
    alert(`The name is: ${r1} ${r2} ${r3}`);
}

nameGenerator(r1,r2,r3);

