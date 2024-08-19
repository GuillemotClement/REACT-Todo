export default function TodoList({ todoList }) {
  return (
    <div className="">
      <h2>Mes todo</h2>
      <div className="">
        {todoList.map((todo) => (
          <div className="" key={todo.id}>
            <h3>{todo.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
