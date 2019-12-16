class TodoModel {

    // ...

    create(description, callback) {
        // Write code and query to create a new TODO item
    }

    update(id, description, callback) {
        // Write code and query to update and existing TODO item
    }

    delete(id, callback) {
        // Write code and query to delete an existing TODO item
    }

    tagTodoItem(todoItemId, tagId, callback) {
        // Write code and query add a tag to a TODO item
    }

    untagTodoItem(todoItemId, tagId, callback) {
        // Write code and query remove a tag from a TODO item
    }

    markCompleted(todoItemId, callback) {
        // Write code to mark a TODO item as completed
    }
}
