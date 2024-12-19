function addTask(){
    const taskInput=document.getElementById("taskinput").value
    const taskList=document.getElementById("tasklist")
    if(taskInput==""){
        alert("Please enter the task")
        return
    }


const listItems=document.createElement("li")
listItems.innerText=taskInput
tasklist.appendChild(listItems)

const buttoncontainer=document.createElement('div')
listItems.appendChild(buttoncontainer)
buttoncontainer.className="task-button"

const deleteButton=document.createElement('button')
buttoncontainer.appendChild(deleteButton)
deleteButton.innerText="Delete"
deleteButton.onclick=function(){
    if(confirm("Are you sure you want to delete this task ?")){
        taskList.removeChild(listItems)
    }
}

var completeButton=document.createElement('button')
buttoncontainer.appendChild(completeButton)
completeButton.innerText="Complete"
completeButton.onclick=function(){
    listItems.classList.toggle('completed')
}

document.getElementById("taskinput").value = "";
}