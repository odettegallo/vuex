<template>
  <div id="app" class="container mt-5">
    <ListaPersonajes />
  </div>
</template>

<script>
import ListaPersonajes from './components/ListaPersonajes.vue'

export default {
  name: 'App',
  components: {
    ListaPersonajes
  }
}
</script>

<style>
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}
</style>