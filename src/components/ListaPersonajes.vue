<template>
  <div class="lista-personajes">
    <h2 class="titulo-pokemon">Personajes Ficticios</h2>
    <ul class="lista-items">
      <li v-for="personaje in personajes" :key="personaje.id" class="personaje-card">
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

<style scoped>
.lista-personajes {
  text-align: center;
  padding: 20px;
  background-color: #3B4CCA; /* Azul de la Poké Ball */
  border: 8px solid #CC0000; /* Rojo de la Poké Ball */
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  width: 90%;
}

.titulo-pokemon {
  color: white;
  text-shadow: 4px 4px #2a348b;
  margin-bottom: 20px;
}

.lista-items {
  list-style: none;
  padding: 0;
}

.personaje-card {
  background-color: #FFDE00; /* Pokémon Amarillo */
  border: 4px solid #3B4CCA;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 15px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.personaje-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

h3 {
  margin-top: 0;
  color: #CC0000;
  text-shadow: 2px 2px white;
}

p {
  margin-bottom: 0;
  color: #2a348b;
}
</style>