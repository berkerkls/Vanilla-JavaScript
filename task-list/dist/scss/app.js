const form= document.querySelector("#new-task")
const taskDiv= document.querySelector(".task-content")
const taskInput= document.querySelector("#new-task-input")
const taskList = document.querySelector(".task-list")

// load event listeners
loadEventListeners()

// Load all event listeners
function loadEventListeners(e) {
    form.addEventListener("submit", addTask)
    // remove tasks
    taskList.addEventListener("click", removeTask)
}

function addTask(e) {
    if (taskInput.value === "") {
        alert("Add a task")
    }else {
         // Create an input
    const firstTasks= document.createElement("div")
    firstTasks.id= "tasks"
    const newTask= document.createElement("div")
    newTask.className= "task"
    firstTasks.appendChild(newTask)
    const newTaskContent= document.createElement("div")
    newTaskContent.className= "task-content"
    newTask.appendChild(newTaskContent)
    const newInput= document.createElement("input")
    newInput.type= "text"
    newInput.className= "text"
    newInput.value= taskInput.value
    newTaskContent.appendChild(newInput)
    const newActions= document.createElement("div")
    newActions.className = "actions"
    const editButton= document.createElement("button")
    editButton.className= "edit"
    editButton.appendChild(document.createTextNode("Edit"))
    const deleteButton = document.createElement("button")
    deleteButton.className= "delete"
    deleteButton.appendChild(document.createTextNode("delete"))
    newActions.appendChild(editButton)
    newActions.appendChild(deleteButton)
    newTask.appendChild(newActions)

    taskList.appendChild(firstTasks)

    taskInput.value= "";

    e.preventDefault()
    }
}

// Remove Task
function removeTask(e) {
    if(e.target.classList.contains("delete")) {
        if(confirm("Are you sure you want to delete this?")) {
            e.target.parentElement.parentElement.parentElement.remove()
        }
        
    }
}

