export default function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: crypto.randomUUID(),
            content: action.content,
            done: false,
            edit: false,
            selected: false,
          },
        ],
      };
    }
    case "DELETE_TODO": {
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id != action.id),
      };
    }
    case "VALID_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo,
        ),
      };
    }
    case "EDIT_TODO_MOD": {
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id ? { ...todo, edit: !todo.edit } : todo,
        ),
      };
    }
    case "EDIT_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id
            ? { ...todo, edit: false, content: action.content }
            : todo,
        ),
      };
    }
    case "SELECT_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id
            ? { ...todo, selected: true }
            : { ...todo, selected: false },
        ),
      };
    }
    default: {
      throw new Error("Action inconnue");
    }
  }
}
