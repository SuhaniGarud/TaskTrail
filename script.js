const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');
const completedList = document.getElementById('completed');

addButton.addEventListener('click', function() {
    // Retrieve the task from the input field
    const taskText = taskInput.value.trim();

    // Check if the task is not empty
    if (taskText !== '') {
        // Create a new list item element
        const listItem = document.createElement('li');

        // Create a span for the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.classList.add('task-text');

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Completed';
        completeButton.classList.add('complete-button');

        // Append the task span and delete button to the list item
        listItem.appendChild(taskSpan);
        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }
});
taskList.addEventListener('click',function(event){
    if(event.target.classList.contains('complete-button')){
        const listItem =event.target.parentNode;
        completedList.appendChild(listItem);
    }
})
completedList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-button')) {
        const listItem = event.target.parentNode;
        completedList.removeChild(listItem);
    }
});
taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-button')) {
        const listItem = event.target.parentNode;
        taskList.removeChild(listItem);
    }
});