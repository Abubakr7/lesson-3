import React from "react";
import { ITodoProps } from "../types";

const Todo = ({ todo, onEditModal, onDelete, onComplete }: ITodoProps) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onComplete(event.target.checked);
        }}
      />
      <span>{todo.complete ? <s>{todo.title}</s> : todo.title}</span>
      <button onClick={onDelete}>delete</button>
      <button onClick={onEditModal}>edit</button>
    </div>
  );
};

export default Todo;
