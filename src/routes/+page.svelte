<script>
  import TodoForm from "../components/TodoForm.svelte";
  import Alice from "../components/Alice.svelte";
  import Todo from "../components/Todo.svelte";
  import { todos } from "../stores/todoStore.js";
</script>

<main>
  <h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">
    My Todos
  </h1>
  <TodoForm />
  {#each $todos as todo (todo.id)}
    {#if todo.text == "ALICE"}
      <Alice {todo} index={todo.id} />
    {:else}
      <Todo {todo} index={todo.id} />
    {/if}
  {/each}
</main>

