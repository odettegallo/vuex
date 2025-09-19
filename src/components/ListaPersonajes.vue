<template>
  <div class="lista-personajes">
    <h2 class="titulo-pokemon">Pokédex</h2>
    
    <div class="mb-3">
      <input 
        type="text" 
        class="form-control" 
        placeholder="Buscar Pokémon por nombre..." 
        v-model="filtro"
      >
    </div>

    <div v-if="isLoading" class="loading-message">
      <p>Cargando Pokémon... </p>
    </div>
    
    <div v-else-if="personajesFiltrados.length > 0" class="pokemon-grid">
      <PokemonCard 
        v-for="personaje in personajesFiltrados" 
        :key="personaje.id" 
        :pokemon="personaje"
      />
    </div>
    
    <div v-else>
      <p class="no-pokemon-message">El Pokémon que desea buscar no existe.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PokemonCard from './PokemonCard.vue';

export default {
  name: 'ListaPersonajes',
  components: {
    PokemonCard
  },
  data() {
    return {
      filtro: ''
    }
  },
  computed: {
    ...mapGetters(['personajes', 'isLoading']),
    personajesFiltrados() {
      if (!this.filtro) {
        return this.personajes;
      }
      return this.personajes.filter(personaje => 
        personaje.nombre.toLowerCase().includes(this.filtro.toLowerCase())
      );
    }
  }
}
</script>

<style scoped>
.lista-personajes {
  text-align: center;
  padding: 20px;
  background-color: #3B4CCA;
  border: 8px solid #CC0000;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  max-width: 100%;
  width: 100%;
}

.titulo-pokemon {
  color: white;
  text-shadow: 4px 4px #2a348b;
  margin-bottom: 20px;
  font-family: 'Press Start 2P', cursive;
}

.pokemon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 0;
  list-style: none;
}

.loading-message {
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
}

.no-pokemon-message {
  color: white;
  text-shadow: 2px 2px #CC0000;
  font-size: 1.2rem;
  font-weight: bold;
}
</style>