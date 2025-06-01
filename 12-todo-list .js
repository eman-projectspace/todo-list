const todoList = [{
  name : 'make dinner', 
  dueDate: '11-24-2024'
}, {
  name:'wash dishes' ,
  dueDate:'11-24-2024'
}];


renderTodoList();

function renderTodoList(){
let todoListHTML = '';                                  
todoList.forEach((todoObject,index)=>{                //FOR EACH METHOD
  //  const name = todoObject.name;
  //  const dueDate = todoObject.dueDate;
   const {name,dueDate} = todoObject;
   const html = `
   
   <div>${name} </div>
   <div>${dueDate}</div>
    <button class="delete-todo-button js-delete-todo-button">Delete</button>
   `;
   todoListHTML += html;
});

document.querySelector('.js-todo-List')
.innerHTML = todoListHTML;

document.querySelectorAll('.js-delete-todo-button')
.forEach((deleteButton,index)=> {
  deleteButton.addEventListener('click',()=>{
    todoList.splice({index},1);
    renderTodoList();
  })

});
}



document.querySelector('.js-add-todo-button')
.addEventListener('click',() => {
  addTodo();
});
/*for (let i = 0 ; i <todoList.length; i++){        //FOR LOOP METHOD
  const  todoObject = todoList[i];
 //  const name = todoObject.name;
 //  const dueDate = todoObject.dueDate;
  const {name,dueDate} = todoObject;
  const html = `
  
  <div>${name} </div>
  <div>${dueDate}</div>
   <button onclick="
   todoList.splice(${i},1);
   renderTodoList();
   " class="delete-todo-button">Delete</button>
  `;
  todoListHTML += html;
}
*/



function addTodo(){
  const inputElement = document.querySelector('.js-name-input')
   const name = inputElement.value;
   
   const dateInputElement = document.querySelector('.js-due-date-input');
   const dueDate = dateInputElement.value;

   todoList.push({
   // name: name,
  //  dueDate:dueDate
    name,dueDate
});
    

    inputElement.value = '';
  
  renderTodoList();
}