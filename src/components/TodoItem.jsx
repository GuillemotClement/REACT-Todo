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
            className="bg-green-500 text-white hover:bg-green-700"
            onClick={(e) => {
              e.stopPropagation();
              validTodo();
            }}
            text="Valider"
          />
          <Button
            className="bg-orange-500 text-white hover:bg-orange-700"
            onClick={(e) => {
              e.stopPropagation();
              editTodoMod();
            }}
            text="Modifier"
          />
          <Button
            className="bg-red-500 text-white hover:bg-red-700"
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
