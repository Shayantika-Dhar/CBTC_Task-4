// Load tasks from localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
     loadTasks();
    });


function addTask() {
    var taskInput = document.getElementById("task");
    var startDateInput = document.getElementById("startDate");
    var endDateInput = document.getElementById("endDate");

    var task = taskInput.value;
    var startDate = startDateInput.value;
    var endDate = endDateInput.value;

    if (task === "" || startDate === "" || endDate === "") {
        alert("Please fill in all fields");
        return;
    }

    var tasksContainer = document.getElementById("tasks-container");

    var taskDiv = document.createElement("div");
    taskDiv.className = "task";
    taskDiv.innerHTML = `<span>${task}</span>Start Date: ${startDate} | End Date: ${endDate}`;
    
    tasksContainer.appendChild(taskDiv);

    // Clear input fields
    taskInput.value = "";
    startDateInput.value = "";
    endDateInput.value = "";
}

    function saveTasks() {
        const tasks = document.getElementById('tasks-container').innerHTML;
        localStorage.setItem('tasks', tasks);
    }

    function loadTasks() {
        const tasksContainer = document.getElementById('tasks-container');
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            tasksContainer.innerHTML = savedTasks;
        }
    }

