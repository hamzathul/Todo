import axios from "axios";

const API_URL = "http://localhost:5000/api/todos";

export const getTodos = () => axios.get(API_URL);

export const addTodo = (todo) => axios.post(API_URL, todo);

export const updateTodo = (id, updatedTodo) =>
  axios.put(`${API_URL}/${id}`, updatedTodo);
export const toggleTodoCompletion = (id) =>
  axios.put(`${API_URL}/${id}/toggle`);
export const deleteTodos = (ids) => axios.delete(API_URL, { data: { ids } });
