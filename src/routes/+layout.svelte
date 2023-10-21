<script>
  import { supabase } from "../lib/supabaseClient.js";
  import { user } from "../stores/authStore.js";
  import "../app.css";
  import Auth from "../components/Auth.svelte";
  import Navbar from "../components/Navbar.svelte";
  import { loadTodos } from "../stores/todoStore.js";

  user.set(supabase.auth.getUser());
  console.log(supabase.auth.getUser());

  supabase.auth.onAuthStateChange((_, session) => {
    user.set(session?.user);
    if (session?.user) {
      loadTodos();
    }
  });
</script>

<div class="container mx-auto my-8 max-w-lg">
  {#if $user}
    <Navbar />
    <slot />
  {:else}
    <Auth />
  {/if}
</div>
