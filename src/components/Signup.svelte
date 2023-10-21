<script>
    import { handleSignUp, handleAuth } from "../stores/authStore.js";
  
    let email;
    let password;
  
  </script>

<h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">Register</h1>
<p class="text-center mt-2">Sign up with your credentials below.</p>

<form
  action=""
  on:submit|preventDefault={handleSignUp(email, password)}
>
  <div class="flex flex-col text-sm mb-2">
    <label class="font-bold mb-2 text-grey-800" for="email">Email</label>
    <input
      class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"
      name="email"
      placeholder="Your email"
      type="email"
      bind:value={email}
    />
    <label class="font-bold mb-2 mt-2 text-grey-800" for="password"
      >Password</label
    >
    <input
      class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"
      name="password"
      placeholder="Your password"
      type="password"
      bind:value={password}
    />
  </div>
  <button
    type="submit"
    class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
    >Sign Up</button
  >
  <div class="mt-1 rounded-lg flex justify-end items-center pl-[50%]">
    <p class="">or</p>
    <button
      type="button"
      on:click={handleAuth}
      class="rounded-lg text-blue-500 hover:text-blue-700 py-2 px-4"
      >Login</button
    >
  </div>
</form>
