import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(content) {
    const todo = {
      id: crypto.randomUUID(),
      content,
      done: false,
      edit: false,
    };
    setTodoList([...todoList, todo]);
  }

  function deleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  function validTodo(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="container rounded-xl bg-white px-10 py-8 shadow-lg">
        <h1 className="mb-5 border-b pb-4 text-center text-3xl font-bold uppercase">
          Ma todo liste
        </h1>
        <AddTodo addTodo={addTodo} />
        <TodoList
          todoList={todoList}
          deleteTodo={deleteTodo}
          validTodo={validTodo}
        />
      </div>
    </div>
  );
}

export default App;
