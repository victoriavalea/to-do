let task = document.getElementById("inputTask").value;
const btnAdd = document.getElementById("btnAdd");
let p = document.querySelector("p");

btnAdd.addEventListener("click", function () {
    if (inputTask.value.trim() != 0) {
        let localItems = JSON.parse(localStorage.getItem("localItem"));

        if (localItems === null) {
            taskList = []
        }else{
            taskList = localItems
        }

        taskList.push(inputTask.value)
        localStorage.setItem('localItem', JSON.stringify(taskList))
    }
    showItem();
});

function showItem(){
    let localItems = JSON.parse(localStorage.getItem("localItem"));

    if (localItems === null) {
        taskList = []
    }else{
        taskList = localItems
    }

    let html = ""
    let itemShow = document.querySelector(".todoList")
    taskList.forEach((data, index)=> {

         html += `
        
         <div class="todoList">
         <p class="pText">${data}</p>
         <button class="deleteTask" onclick="deleteItem(${index})">X</button>
         </div>
         `;
         });
         itemShow.innerHTML = html
}
function deleteItem(index){
     let localItems = JSON.parse(localStorage.getItem('localItem'))
    taskList.splice(index,1)
localStorage.setItem('localItem', JSON.stringify(taskList))
showItem

}
function clearTask(){
localStorage.clear();
showItem();
}
