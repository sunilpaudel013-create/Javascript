const boxes = document.querySelectorAll('.box');
const colors = ['red','blue','green','orange','purple']

boxes.forEach((box, index)=>
{
    box.style.backgroundColor = colors[index];
});

