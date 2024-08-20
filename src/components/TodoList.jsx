import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

export default function TodoList({
  todoList,
  deleteTodo,
  validTodo,
  editTodoMod,
  editTodo,
  cancelTodo,
}) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) =>
        todo.edit ? (
          <EditTodo
            todo={todo}
            key={todo.id}
            editTodo={(content) => editTodo(todo.id, content)}
            cancelTodo={() => editTodoMod(todo.id)}
          />
        ) : (
          <TodoItem
            todo={todo}
            deleteTodo={() => deleteTodo(todo.id)}
            validTodo={() => validTodo(todo.id)}
            editTodoMod={() => editTodoMod(todo.id)}
            key={todo.id}
          />
        ),
      )}
    </ul>
  ) : (
    <p className="text-center">Aucune todo pour le moment</p>
  );
}
