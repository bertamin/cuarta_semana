
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);

  function addToDoItem() {
    // add your code here
    // this should create a new list item in the to-do list
    // and set the text as the input from the todo-input field
    var input = document.getElementById('todo-input');
    var nuevoElementoListaTareas = document.createElement('li');
    nuevoElementoListaTareas.innerHTML = input.value;
    
    var listaTareas = document.querySelector('ul.todo-list-items');
    listaTareas.appendChild(nuevoElementoListaTareas);
  }

  function markAsDone() {
    // add your code here
    // this should remove the FIRST li item from to-do list
    // and add it to the done list (with the strikethrough!)
    var primerElementoListaTareas = document.querySelector('ul.todo-list-items li');
    primerElementoListaTareas.remove();

    var listaTareasCompletadas = document.querySelector('ul.done-list-items');
    primerElementoListaTareas.style.textDecoration = 'line-through';
    listaTareasCompletadas.appendChild(primerElementoListaTareas);
  }
  
}
