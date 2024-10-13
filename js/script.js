// ------------dom----------------------
let Headinput            =document.querySelector('.Headinput')
let Headbutton           =document.querySelector('.Headbutton')
// let singleTodo           =document.querySelector('.singleTodo')
// let todoInput            =document.querySelector('.todoInput')
// let editButton           =document.querySelector('.editButton')
// let removeButton         =document.querySelector('.removeButton')
let error                =document.querySelector('.error')
let todoList             =document.querySelector('.todoList')
// ------------------function part-------------
let inputclick =()=>{
    if(Headinput.value==''){
        error.innerHTML="Please enter any text"
        
    }
    else{
        error.innerHTML     =''
        // ---------------Element--------------------
        let singleTodo      =document.createElement('div')
        let input           =document.createElement('input')
        let editButton      =document.createElement('button')
        let removeButton    =document.createElement('button')
        // ---------------Child---------------------
        todoList.appendChild(singleTodo)
        singleTodo.appendChild(input)
        singleTodo.appendChild(editButton)
        singleTodo.appendChild(removeButton)
        // ---------------Class name-----------------
        singleTodo.classList.add('singleTodo')
        editButton.classList.add('editButton')
        removeButton.classList.add('removeButton')
        // ----------------Value----------------------
        editButton.innerHTML='Edit'
        removeButton.innerHTML='Remove'
        // -----------------Add data into input fild------
        input.value   =Headinput.value
        // -----------------Functionality-----------------
        Headinput.value=''
        // ------------------input attribute--------------
        input.setAttribute('readonly', 'readonly');
        // -------------------delet data------------------
        removeButton.addEventListener('click' , ()=>{
            singleTodo.remove()
        })
        // -----------------edit data---------------------
        editButton.addEventListener('click' , ()=>{
            if(editButton.innerHTML=='Edit'){
                editButton.innerHTML='Save'
                editButton.style="color:white"
                input.removeAttribute('readonly', 'readonly');
            }
            else{
                editButton.innerHTML='Edit'
                input.setAttribute('readonly', 'readonly');
            }
        })
    }
}
// ------------------Enter key function -------------
let inputkey =(item)=>{
    if(item.key=='Enter'){
        inputclick()
    }
}