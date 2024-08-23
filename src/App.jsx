import { useReducer, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import todoReducer from "./reducers/todoReducer";

function App() {
  const [state, dispatch] = useReducer(todoReducer, {
    todoList: [],
  });

  function addTodo(content) {
    dispatch({
      type: "ADD_TODO",
      content,
    });
  }

  function deleteTodo(id) {
    dispatch({
      type: "DELETE_TODO",
      id,
    });
  }

  function validTodo(id) {
    dispatch({
      type: "VALID_TODO",
      id,
    });
  }

  function editTodoMod(id) {
    dispatch({
      type: "EDIT_TODO_MOD",
      id,
    });
  }

  function editTodo(id, content) {
    dispatch({
      type: "EDIT_TODO",
      id,
      content,
    });
  }

  function selectTodo(id) {
    dispatch({
      type: "SELECT_TODO",
      id,
    });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="container rounded-xl bg-white px-10 py-8 shadow-lg">
        <h1 className="mb-5 border-b pb-4 text-center text-3xl font-bold uppercase">
          Ma todo liste
        </h1>
        <AddTodo addTodo={addTodo} />
        <TodoList
          todoList={state.todoList}
          deleteTodo={deleteTodo}
          validTodo={validTodo}
          editTodoMod={editTodoMod}
          editTodo={editTodo}
          selectTodo={selectTodo}
        />
      </div>
    </div>
  );
}

export default App;
