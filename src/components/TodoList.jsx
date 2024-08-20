import TodoItem from "./TodoItem";

export default function TodoList({ todoList }) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </ul>
  ) : (
    <p className="text-center">Aucune todo pour le moment</p>
  );
}
