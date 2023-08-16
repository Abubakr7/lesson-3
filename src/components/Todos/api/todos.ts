import { ITodo, ITodoRequest } from "../types";

export async function getTodos(title: string) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/todos${title ? "?title=" + title : ""}`
    );
    const data = await response.json();

    return data;
  } catch (err) {
    return err;
  }
}

export async function postTodo(body: ITodoRequest) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
}
export async function putTodo(body: ITodo) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/todos/${body.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function deleteTodo(id: number) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/todos/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
