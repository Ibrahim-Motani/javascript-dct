// handlers
const input = document.querySelector('input');
const ul = document.querySelector('ul');

// initializing tasks array
let tasks = [];

// initializing tasks if length of local storage is 0
if (localStorage.length == 0) {
    tasks = [];
}
// else printing tasks from local storage that are yet to be completed and not removed from the list and local storage
else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement('li');
        li.textContent = `${tasks[i]}`;
        ul.append(li);

        // adding event listeners to remove these tasks from list when clicked
        li.addEventListener('click', () => {
            tasks.splice(tasks.indexOf(li.textContent), 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            ul.removeChild(li);
        });
    }
}

// listening for enter key press on inputs
input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        // pushing task to array
        tasks.push(input.value);
        // updating local storage
        localStorage.setItem('tasks', JSON.stringify(tasks));
        // adding it to the task list
        let li = document.createElement('li');
        li.textContent = `${tasks[tasks.length - 1]}`;
        ul.append(li);

        // adding an event listener to remove elements from the list
        li.addEventListener('click', () => {
            tasks.splice(tasks.indexOf(li.textContent), 1)
            localStorage.setItem('tasks', JSON.stringify(tasks));
            ul.removeChild(li);
        })
        // clearing the input box
        input.value = '';
    }
});
