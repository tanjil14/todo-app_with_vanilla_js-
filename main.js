//Select elements & assign them to variables

let newTask = document.querySelector("#new-task");
let form = document.querySelector("form");
let todoListUl = document.querySelector("#items");
let completeUl = document.querySelector(".complete-list ul");

//Create Task function

let createTask = function (task) {
  let listItem = document.createElement("li");
  let checkBox = document.createElement("input");
  let label = document.createElement("label");

  label.innerText = task;
  checkBox.type = "checkbox";
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  return listItem;
};

//Add Task function

let addTask = function (event) {
  event.preventDefault();
  let listItem = createTask(newTask.value);
  todoListUl.appendChild(listItem);
  newTask.value = "";
  //bind complete task function
  bindCompleteItem(listItem, completeTask);
};


let completeTask = function () {
  let listItem = this.parentNode;
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);

  let checkBox = listItem.querySelector('input[type="checkbox"]');
  checkBox.remove();
  completeUl.appendChild(listItem);
  //another event when press delete button
  bindDeleteItem(listItem, deleteTask);
};

let deleteTask = function () {
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
};


let bindCompleteItem = function (item, checkBoxClick) {
  let checkBox = item.querySelector('input[type="checkbox"]');
  checkBox.onchange = checkBoxClick;
};


let bindDeleteItem = function (item, deleteBtnClick) {
  let deleteBtn = item.querySelector(".delete");
  deleteBtn.onclick  = deleteBtnClick;
};


for(let i=0;i<todoListUl.children.length;i++){
    bindCompleteItem(todoListUl.children[i],completeTask)
}


for(let i=0;i<completeUl.children.length;i++){
    bindDeleteItem(completeUl.children[i],deleteTask)
}

form.addEventListener("submit", addTask);
