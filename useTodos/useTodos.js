import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || []);
  }, [todos]);

  const handleTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remiove Todo",
      payload: id,
    });
  };

  return {
    todos,
    handleTodo,
    handleToggleTodo,
    handleDeleteTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
  };
};
