import { useState } from "react";
import Button from "./Button";

export default function AddTodo({ addTodo }) {
  const [value, setValue] = useState("");

  function handleClick(e) {
    e.preventDefault();
    if (value.length) {
      addTodo(value);
      setValue("");
    }
  }
  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleKeyDown(e) {
    if (e.code === "Enter" && value.length) {
      addTodo(value);
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
          placeholder="Ajouter todo"
          value={value}
        />
      </div>
      <div className="my-5 flex justify-end">
        <Button
          text="Ajouter une nouvelle todo"
          onClick={handleClick}
          className="bg-blue-400 text-white hover:bg-blue-700"
        />
      </div>
    </form>
  );
}
