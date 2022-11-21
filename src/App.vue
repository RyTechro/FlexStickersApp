<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NavBar from './components/NavBar.vue';
import { useAuthStore } from './stores/auth';

const store = useAuthStore();
</script>

<template>
  <div id="app">
    <main>
      <router-view />
    </main>
    <NavBar v-if="store.isAuthenticated" />
  </div>
</template>

<style>
body {
  padding: 1.5rem 1.5rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
