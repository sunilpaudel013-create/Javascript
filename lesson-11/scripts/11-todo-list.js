const toDolist = [];

function displayTodo() {
    let listHTML = '';
    const inputElement = document.querySelector('.text-input');
    toDolist.push(inputElement.value);

    let i = 0;
    while (i < toDolist.length) {
        listHTML += `<p>${toDolist[i]}</p>`;
        i++;
    }

    document.querySelector('.display-list').innerHTML = listHTML;
    inputElement.value = '';
}
