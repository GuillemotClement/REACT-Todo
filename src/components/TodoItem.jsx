export default function TodoItem({ todo, deleteTodo, validTodo, editTodo }) {
  return (
    <div className="mb-3 rounded-md border-b px-4 py-3">
      <li className="flex justify-between">
        <span>
          {todo.content} {todo.done && "✅"}
        </span>
        <div className="flex gap-x-3">
          <button
            className="rounded-lg bg-green-500 px-2 py-1 text-white shadow-lg hover:bg-green-700"
            onClick={validTodo}
          >
            Valider
          </button>
          <button
            className="rounded-lg bg-orange-500 px-2 py-1 text-white shadow-lg hover:bg-orange-700"
            onClick={editTodo}
          >
            Modifier
          </button>
          <button
            className="rounded-lg bg-red-500 px-2 py-1 text-white shadow-lg hover:bg-red-700"
            onClick={deleteTodo}
          >
            Supprimer
          </button>
        </div>
      </li>
    </div>
  );
}
