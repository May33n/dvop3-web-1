<template>
  <div class="app">
    <Sidebar />
    <router-view />
  </div>
</template>

<script setup>
import Sidebar from "./components/Sidebar.vue";
</script>

<style lang="scss">
:root {
  --sidebar-width: 300px;
}

body {
  background: var(--light);
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
}
</style>
