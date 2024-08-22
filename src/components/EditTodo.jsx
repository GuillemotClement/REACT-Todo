import { useState } from "react";
import Button from "./Button";

export default function EditTodo({ todo, editTodo, cancelTodo }) {
  const [value, setValue] = useState(todo.content);

  function handleClick(e) {
    e.preventDefault();
    if (value.length) {
      editTodo(value);
      setValue("");
    }
  }
  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleKeyDown(e) {
    if (e.code === "Enter" && value.length) {
      editTodo(value);
      setValue("");
    }
  }

  return (
    <form className="flex flex-col">
      <div className="flex flex-col gap-y-3">
        <input
          onKeyDown={handleKeyDown}
          type="text"
          className="rounded-lg border px-2 py-2"
          onChange={handleChange}
          placeholder={value}
          value={value}
        />
      </div>
      <div className="my-5 flex justify-end gap-x-3">
        <Button
          className="w-80 rounded-lg bg-slate-400 px-3 py-2 text-white shadow-md hover:bg-slate-700"
          onClick={cancelTodo}
          text="Annuler"
        />
        <Button
          className="w-80 rounded-lg bg-blue-400 px-3 py-2 text-white shadow-md hover:bg-blue-700"
          onClick={handleClick}
          text="Modifier"
        />
      </div>
    </form>
  );
}
