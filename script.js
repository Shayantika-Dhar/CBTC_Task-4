// Load tasks from local storage on page load
document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
});

function addTask() {
    // Get task details from input fields
    var task = document.getElementById('task').value;
    var startDate = document.getElementById('startDate').value;
    var endDate = document.getElementById('endDate').value;

    // Create a task object
    var newTask = {
        task: task,
        startDate: startDate,
        endDate: endDate
    };

    // Save the task to local storage
    saveTask(newTask);

    // Add the task to the tasks container
    displayTask(newTask);

    // Clear input fields
    document.getElementById('task').value = '';
    document.getElementById('startDate').value = '';
    document.getElementById('endDate').value = '';
}

function saveTask(task) {
    // Get existing tasks from local storage or initialize an empty array
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Add the new task to the array
    tasks.push(task);

    // Save the updated tasks array back to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    // Get tasks from local storage
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Display each task in the tasks container
    tasks.forEach(function(task) {
        displayTask(task);
    });
}

function displayTask(task) {
    // Display the task in the tasks container
    var tasksContainer = document.getElementById('tasks-container');
    var taskElement = document.createElement('div');
    taskElement.innerHTML = '<p><strong>Task:</strong> ' + task.task + '</p>' +
                            '<p><strong>Start Date:</strong> ' + task.startDate + '</p>' +
                            '<p><strong>End Date:</strong> ' + task.endDate + '</p>';
    tasksContainer.appendChild(taskElement);
}
