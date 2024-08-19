export default function TodoItem() {
  return (
    <div className="">
      <p>TodoItem</p>
    </div>
  );
}

// export default function TodoList({ todoList }) {
//   function handleClickDelete(id) {
//     alert(id);
//   }
//   function handleClickEdit() {
//     alert("Editer");
//   }
//   function handleClickValide() {
//     alert("Valider");
//   }
//   return (
//     <div className="">
//       <h2 className="border-b text-center font-bold uppercase">Mes todo</h2>
//       <div className="">
//         {todoList.map((todo) => (
//           <div
//             className="flex flex-row justify-between border px-3 py-2"
//             key={todo.id}
//           >
//             <h3>{todo.content}</h3>
//             <div className="flex gap-x-2">
//               <button
//                 className="rounded-lg bg-red-500 px-2 py-1 text-white shadow-lg hover:bg-red-700"
//                 onClick={(e) => handleClickDelete(e, todo.id)}
//               >
//                 Supprimer
//               </button>
//               <button
//                 className="rounded-lg bg-orange-500 px-2 py-1 text-white shadow-lg hover:bg-orange-700"
//                 onClick={handleClickEdit}
//               >
//                 Editer
//               </button>
//               <button
//                 className="rounded-lg bg-green-500 px-2 py-1 text-white shadow-lg hover:bg-green-700"
//                 onClick={handleClickValide}
//               >
//                 Valider
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
