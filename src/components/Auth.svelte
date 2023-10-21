<script>
  import { supabase } from "../lib/supabaseClient.js";
  import { handleLogin, handleSignUp } from "../stores/authStore.js";
  import { exist } from "../stores/authStore.js";
  import Login from "./Login.svelte";
  import Signup from "./Signup.svelte";

  console.log(exist);
</script>

{#if $exist}
  <Login />
{:else}
  <Signup />
{/if}
