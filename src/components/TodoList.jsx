import TodoItem from "./TodoItem";

export default function TodoList({ todoList, deleteTodo, validTodo }) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) => (
        <TodoItem
          todo={todo}
          deleteTodo={() => deleteTodo(todo.id)}
          validTodo={() => validTodo(todo.id)}
          key={todo.id}
        />
      ))}
    </ul>
  ) : (
    <p className="text-center">Aucune todo pour le moment</p>
  );
}
