<template>
  <div>
    <h2>Personajes Ficticios</h2>
    <ul>
      <li v-for="personaje in personajes" :key="personaje.id">
        <h3>{{ personaje.nombre }}</h3>
        <p>{{ personaje.descripcion }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ListaPersonajes',
  computed: {
    ...mapGetters(['personajes'])
  }
}
</script>
