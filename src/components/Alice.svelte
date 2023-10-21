<script>
  import Icon from "../lib/assets/allice.jpg";
  import { toggleTodoCompleted, deleteTodo } from "../stores/todoStore";
  export let todo;
</script>

<div
  class="bg-white flex flex-col items-center shadow-sm border border-gray-200 rounded-lg my-2 py-2 px-4"
>
  <div class="w-full flex justify-evenly items-center mb-2">
    <input
      name="completed"
      type="checkbox"
      checked={todo.completed}
      on:change={() => toggleTodoCompleted(todo.id)}
      class="mr-2 form-checkbox h-5 w-5 inline-block"
    />
    <span
      class={`flex-1 text-gray-800  ${todo.completed ? "line-through" : ""}`}
    >
      Alice
    </span>
    <button
      type="button"
      class="bg-red-500 text-sm hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
      on:click={() => deleteTodo(todo.id)}>Delete</button
    >
  </div>
  <div style="background-image: url({Icon})" class="h-72 w-full bg-cover bg-center overflow-hidden" />
</div>
