<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <h1>Student Hackathon Japan</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/schedule">Schedule</RouterLink> |
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  padding: 20px 0;
  text-align: center;
}

nav {
  margin-top: 20px;
}

nav a {
  margin: 0 10px;
  color: #2c3e50;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>