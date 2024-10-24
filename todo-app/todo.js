document.addEventListener("DOMContentLoaded", () => {

    //Select DOM elements
    const addBtn = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    //Function to add tasks
    const addTask = () => {

        //Get the task text and trim any extra spaces
        const taskText = taskInput.value.trim();

        //Check if the task text is empty
        if (taskText === "") {
            alert("please enter a task");
            return; //Stop futher execution if the input is empty
        }

        //Task creation and removal 
        //Create a new list item
        const newTask = document.createElement("li");
        newTask.textContent = taskText;

        //Create a new button element for removing task
        const removeBtn = document.createElement("button");
        removeBtn.className = "remove-btn";
        removeBtn.textContent = "Remove";

        //Attach event listener to remove btn
        removeBtn.onclick = () => {
        taskList.removeChild(newTask); //Remove list item from the task list
        };

        //Append the remove btn to the list item
        newTask.appendChild(removeBtn);
    
        //Append the list item to the task list
        taskList.appendChild(newTask);

        //Clear the input field
        taskInput.value = "";
    }

    //Attach event listeners 
    //Add task on button click
    addBtn.addEventListener("click", addTask);

    //Add task on key press
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});

addTask();