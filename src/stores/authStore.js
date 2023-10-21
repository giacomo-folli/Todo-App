import { writable } from "svelte/store";
import { supabase } from "../lib/supabaseClient.js";

let loading = false;

// track user auth state
export const user = writable(false);
export const exist = writable(false);

export const handleAuth = () => {
    exist.update((curr) => !curr);
}

export const handleLogin = async (email, password) => {
  try {
    loading = true;
    console.log(email);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
  } catch (error) {
    console.error(error);
    alert(error.error_description || error.message);
  } finally {
    loading = false;
  }
};

export const handleSignUp = async (email, password) => {
  try {
    loading = true;
    console.log(email);

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) throw error;
    alert("Check your email for the login link!");
  } catch (error) {
    console.error(error);
    alert(error.error_description || error.message);
  } finally {
    loading = false;
  }
};
