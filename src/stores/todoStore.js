import { writable } from "svelte/store";
import { supabase } from "../lib/supabaseClient.js";

export const todos = writable([]);

export const loadTodos = async () => {
  const { data, error } = await supabase.from("todos").select();

  if (error) {
    return console.log(error);
  }
  todos.set(data);
};

export const addTodo = async (text, user_id) => {
  console.log("Adding a todo:", text); // Add this line for debugging
  const { data, error } = await supabase
    .from("todos")
    .insert([{ text, user_id }])
    .select();

  if (error) {
    // Handle the error, e.g., display an error message to the user
    console.error("Error adding todo:", error);
  }
  todos.update((cur) => [...cur, data[0]]);
};

export const deleteTodo = async (id) => {
  const { error } = await supabase.from("todos").delete().match({ id });
  if (error) {
    return console.log(error);
  }

  todos.update((todos) => todos.filter((todo) => todo.id !== id));
};

export const toggleTodoCompleted = async (id, currentState) => {
  const { error } = await supabase
    .from("todos")
    .update({ completed: !currentState })
    .match({ id });

  if (error) {
    return console.log(error);
  }

  todos.update((todos) => {
    let index = -1;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        index = i;
        break;
      }
    }
    if (index !== -1) {
      todos[index].completed = !todos[index].completed;
    }
    return todos;
  });
};

{
  /* Mi piace fare le cazzate */
}
export const addAlice = async (user_id) => {
  let mess = "ALICE";
  const { data, error } = await supabase
    .from("todos")
    .insert([{ text: mess, user_id }])
    .select();

  if (error) {
    // Handle the error, e.g., display an error message to the user
    console.error("Error adding todo:", error);
  }
  todos.update((cur) => [...cur, data[0]]);
};

