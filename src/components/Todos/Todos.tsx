import React, { useEffect, useState } from "react";
import { ITodo, ITodoRequest } from "./types";
import { deleteTodo, getTodos, postTodo, putTodo } from "./api/todos";
import Todo from "./Todo/Todo";
import Modal from "../Modal/Modal";

const Todos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [title, setTitle] = useState<string>("");
  const [editTodo, setEditTodo] = useState<ITodo>({
    id: 1,
    title: "",
    complete: false,
  });
  const [editModal, setEditModal] = useState<boolean>(false);
  const get = async (title: string) => {
    const data = await getTodos(title);
    setTodos(data);
  };

  const add = async () => {
    const todo: ITodoRequest = {
      title: title,
      complete: false,
    };
    const data = await postTodo(todo);
    console.log(data);
    get(title);
  };

  const edit = async () => {
    const data = await putTodo(editTodo);
    console.log(data);
    get(title);
  };

  const complete = async (todo: ITodo) => {
    const data = await putTodo(todo);
    console.log(data);
    get(title);
  };

  const remove = async (id: number) => {
    const data = await deleteTodo(id);
    console.log(data);
    get(title);
  };

  useEffect(() => {
    
    get(title);
  }, [title]);
  return (
    <div>
      <h1>Todos</h1>
      <input
        type="text"
        value={title}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setTitle(event.target.value);
        }}
      />
      <button onClick={add}>add</button>
      {todos.length > 0 &&
        todos.map((todo: ITodo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onEditModal={() => {
                setEditModal(true);
                setEditTodo(todo);
              }}
              onComplete={(comp: boolean) => {
                const updateTodo: ITodo = { ...todo };
                updateTodo.complete = comp;
                complete(updateTodo);
              }}
              onDelete={() => {
                remove(todo.id);
              }}
            />
          );
        })}
      {editModal && (
        <Modal
          onClose={() => setEditModal(false)}
          actionText="edit"
          onAction={() => {
            edit();
            setEditModal(false);
          }}
          width={300}
          height={200}
          background="gray"
        >
          <input
            type="text"
            value={editTodo?.title}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setEditTodo((prev: ITodo) => ({
                ...prev,
                title: event.target.value,
              }));
            }}
          />
        </Modal>
      )}
    </div>
  );
};

export default Todos;
