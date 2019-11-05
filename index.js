// document.querySelector("form")



// function addTodo (event) {
//     event.preventDefault()
//     document.createElement.add('li')
// }
//  let inputValue = '';
//  let input = document.getElementById('item')
//  input.addEventListener('keypress', function(event){
//      inputValue = event.target.value
//  })

//  function addList(){
//      input.innerText=inputValue;
//  }

//  let findUl = document.querySelector('ul');
//  document.ul.appendChild('li');

// document.querySelector("form").addEventListener("submit", addTodo)

// function addTodo (event){
//     event.preventDefault()
//     const item = document.createElement('li')
//     item.innerText = document.getElementById('item').value

//     const list = document.querySelector('ul');
//     list.appendChild(item);
// }


document.querySelector('form').addEventListener('submit', addTodo)


function addTodo (event){
    event.preventDefault()
    const item = document.createElement('li')
    item.innerText = document.getElementById('item').value

    const button = document.createElement('button')
    button.innerText= "x"
    button.addEventListener('click', removeTodo)
    item.appendChild(button)
    
    const list = document.querySelector('ul')
    list.appendChild(item)
}

function removeTodo(event) {
    event.target.parentNode.remove()
}

function completeTodo(event){
    const value = event.target.getAttribute('aria-checked')
    if (value!== 'true'){
        event.target.setAttribute("aria-checked", "true")
    } else {
        event.target.setAttribute("aria-checked", "false")
    }
}

