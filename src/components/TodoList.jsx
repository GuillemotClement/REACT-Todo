import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

export default function TodoList({
  todoList,
  deleteTodo,
  validTodo,
  editTodo,
}) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) =>
        todo.edit ? (
          <EditTodo todo={todo} key={todo.id} />
        ) : (
          <TodoItem
            todo={todo}
            deleteTodo={() => deleteTodo(todo.id)}
            validTodo={() => validTodo(todo.id)}
            editTodo={() => editTodo(todo.id)}
            key={todo.id}
          />
        ),
      )}
    </ul>
  ) : (
    <p className="text-center">Aucune todo pour le moment</p>
  );
}
