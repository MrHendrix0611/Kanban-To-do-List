function addTask(){
    const taskInput = document.getElementById("taskInput")
    const taskText = taskInput.value.trim()

    if(taskInput !== ""){
        const newTask = document.createElement('div')
        newTask.classList.add('kanban-item')
        newTask.textContent = taskText;

        const todoItems = document.getElementById('todo-items')
        todoItems.appendChild(newTask)

        taskInput.value = ''
    }
}

new Sortable(document.getElementById('todo-items'), {
    group: 'shared', 
    animation: 150
})

new Sortable(document.getElementById('inprogress-items'), {
    group: 'shared',
    animation: 150
})

new Sortable(document.getElementById('done-items'), {
    group: 'shared',
    animation: 150
})

new Sortable(document.getElementById('trash-items'), {
    group: 'shared',
    onAdd: function (evt){
        evt.item.remove()
    },
    animation: 150
})