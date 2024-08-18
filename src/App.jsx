import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="container rounded-xl bg-white px-10 py-8 shadow-lg">
        <h1 className="mb-5 border-b pb-4 text-center text-3xl font-bold uppercase">
          Ma todo liste
        </h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
