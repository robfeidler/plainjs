document.addEventListener('DOMContentLoaded', function()  {
    var todoArray = []

    var form = document.getElementById('the-form')

    form.addEventListener('submit', function(event)  {

        event.preventDefault()       

        var todoField = document.getElementById('new-todo-field')

        var newTodo = todoField.value

        todoArray.push(newTodo)

        document.getElementById('list-of-todos').innerHTML = ""

        for(var i = 0 ; i < todoArray.length; i++){

            createListItem(todoArray[i])
        }
    })

        function createListItem(todo){
            var newListItem = document.createElement('li')

            newListItem.innerText = todo

            var listTodos = document.getElementById('list-of-todos')

            listTodos.appendChild(newListItem)
        }
    

})