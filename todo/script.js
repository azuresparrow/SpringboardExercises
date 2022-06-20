const form = document.querySelector('#addToDo');
const list = document.querySelector('#activeList');
const taskInput = document.querySelector('input[name="task"]')
const taskFormButton = document.querySelector('#showAddTask');
const storedList = JSON.parse(localStorage.getItem("storedList")) || [];

for(const newItem in storedList){
    createToDoItemUI(storedList[newItem].task, storedList[newItem].id, storedList[newItem].isCompleted);
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    const uniqueID = Date.now();
    createToDoItemUI(taskInput.value, uniqueID, false);
    form.classList.toggle("hidden");
    taskFormButton.classList.toggle("hidden");

    storedList.push({task: taskInput.value, id: uniqueID, isCompleted: false})
    localStorage.setItem("storedList", JSON.stringify(storedList));
    console.log(storedList);
});

taskFormButton.addEventListener('click', function(e){
   form.classList.toggle("hidden");
   taskFormButton.classList.toggle("hidden");
});

list.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        removeFromList(e.target.parentElement.querySelector("input").id);
        e.target.parentElement.remove();
    }
    if(e.target.tagName === 'INPUT'){
        e.target.parentElement.classList.toggle('checked');
        toggleCompletedInList(e.target.id);
    }
});

function toggleCompletedInList(uniqueID){
    for(let i = 0; i < storedList.length; i++){
        if(storedList[i].id === uniqueID){
            storedList[i].isCompleted = !storedList[i].isCompleted;
            localStorage.setItem("storedList", JSON.stringify(storedList));
            return;
        }
    }
}

function removeFromList(uniqueID){
    
    for(let i = 0; i < storedList.length; i++){
        if(storedList[i].id == uniqueID){
            storedList.splice(i, 1);
            localStorage.setItem("storedList", JSON.stringify(storedList));
            return;
        }
    }
}

function createToDoItemUI(text, uniqueID, isCompleted){
    const item = document.createElement('li');
    if(isCompleted) item.classList.add('checked');
    const newCheckbox = document.createElement('input');
    const boxLabel = document.createElement('label');
    const button = document.createElement('button');

    newCheckbox.id = uniqueID;
    boxLabel.setAttribute("for", uniqueID);

    newCheckbox.type = "checkbox";
    boxLabel.innerText = text;
    button.innerText = "X";
    
    item.appendChild(button);
    item.appendChild(newCheckbox);
    item.appendChild(boxLabel);
    
    list.appendChild(item);
}
