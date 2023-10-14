

//  Add new Html Element to page


// innerHtml to add html element


// const todoList = document.querySelector(".todo-list")
// console.log(todoList)

// todoList.innerHTML="<li> New Todo</li>"
// we can you

// todoList.innerHTML=todoList.innerHTML+"<li> New Todo</li>"
// todoList.innerHTML += "<li> New Todo</li>"
// todoList.innerHTML += "<li> New Todo 2</li>"

// when you should use it , when not 
// use not use bcz rendom  and performnt low


// const newTodoItem= document.createElement("li")
// console.log(newTodoItem)
// const newTodoItemText=document.createTextNode("Teach Student")

//  todoList.append(newTodoItem)

// newTodoItem.textContent="teach Student"
// todoList.append(newTodoItem)


// appent add in last
// prepent add in first

// const todo1 =document.querySelector(".todo-list li")
// todo1.remove()
// console.log(todo1)

// remove 

// before ul se pahle add karega element ko
// after ul ke bbad


//  clone

// const ul =document.querySelector(".todo-list")
// const li=document.createElement("li")
// li.textContent=" hi Abdul";
// const li2=li.cloneNode(true);
// ul.append(li)
// ul.prepend(li2)


const todoForm  = document.querySelector(".form-todo")
//  console.log(todoForm)
const todoInput = document.querySelector(".form-todo input[type='text']")
//  console.log(todoInput);
const todoList = document.querySelector(".todo-list")

todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    //  console.log("from submitted")
    // console.log(todoInput.value);
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li")
    const newLiInnerHtml = `
        <span class="text"> ${newTodoText}</span>
        <div class="todo-buttons">
        <button  class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>

        </div> `;

    newLi.innerHTML = newLiInnerHtml;
    // console.log(newLi)
    todoList.prepend(newLi);
    todoInput.value='';
})
todoList.addEventListener("click", (e)=>{
    // console.log(e.target)
    // checked if user clicked on done
    
    // console.log(e.target.classList)

    if(e.target.classList.contains("done")){
        // console.log("Great!!!")
        const liSpan=e.target.parentNode.previousElementSibling;
        // console.log(liSpan)
        liSpan.style.textDecoration ="line-through"

    }
    if(e.target.classList.contains("remove")){
        // console.log("you want to remove something ? ")
    
        const targetedLi=e.target.parentNode.parentNode;
        // console.log(targetedLi)
        targetedLi.remove();

    }
})