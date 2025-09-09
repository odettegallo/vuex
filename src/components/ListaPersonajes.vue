<template>
  <div class="lista-personajes">
    <h2 class="titulo-pokemon">Personajes Ficticios</h2>
    
    <div class="mb-3">
      <input 
        type="text" 
        class="form-control" 
        placeholder="Buscar Pokémon por nombre..." 
        v-model="filtro"
      >
    </div>

    <div v-if="personajesFiltrados.length > 0">
      <ul class="lista-items">
        <li v-for="personaje in personajesFiltrados" :key="personaje.id" class="personaje-card">
          <h3>{{ personaje.nombre }}</h3>
          <p>{{ personaje.descripcion }}</p>
        </li>
      </ul>
    </div>
    <div v-else>
      <p class="no-pokemon-message">El pokemon que desea buscar no existe.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ListaPersonajes',
  data() {
    return {
      filtro: ''
    }
  },
  computed: {
    ...mapGetters(['personajes']),
    // Propiedad computada que filtra la lista de personajes
    personajesFiltrados() {
      // Si el filtro está vacío, devolvemos la lista completa
      if (!this.filtro) {
        return this.personajes
      }
      // De lo contrario, filtramos los personajes que coincidan con el filtro
      return this.personajes.filter(personaje => 
        personaje.nombre.toLowerCase().includes(this.filtro.toLowerCase())
      )
    }
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

.no-pokemon-message {
  color: white;
  text-shadow: 2px 2px #CC0000;
  font-size: 1.2rem;
  font-weight: bold;
}
</style>