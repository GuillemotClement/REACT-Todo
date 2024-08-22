import Button from "./Button";

export default function TodoItem({
  todo,
  deleteTodo,
  validTodo,
  editTodoMod,
  selectTodo,
}) {
  return (
    <div
      className={`mb-3 rounded-md border-b px-4 py-3 ${todo.selected && "border-2"}`}
      onClick={selectTodo}
    >
      <li className="flex justify-between">
        <span>
          {todo.content} {todo.done && "✅"}
        </span>
        <div className="flex gap-x-3">
          <Button
            className="rounded-lg bg-green-500 px-2 py-1 text-white shadow-lg hover:bg-green-700"
            onClick={(e) => {
              e.stopPropagation();
              validTodo();
            }}
            text="Valider"
          />
          <Button
            className="rounded-lg bg-orange-500 px-2 py-1 text-white shadow-lg hover:bg-orange-700"
            onClick={(e) => {
              e.stopPropagation();
              editTodoMod();
            }}
            text="Modifier"
          />
          <Button
            className="rounded-lg bg-red-500 px-2 py-1 text-white shadow-lg hover:bg-red-700"
            onClick={(e) => {
              e.stopPropagation();
              deleteTodo();
            }}
            text="Supprimer"
          />
        </div>
      </li>
    </div>
  );
}
