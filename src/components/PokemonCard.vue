<template>
  <div class="pokemon-card">
    <div class="card-body">
      <img :src="pokemon.imagen" :alt="pokemon.nombre" class="pokemon-image">
      <h5 class="card-title">{{ capitalize(pokemon.nombre) }}</h5>
      <p>ID: #{{ pokemon.id }}</p>
      <div class="characteristics">
        <p><strong>Height:</strong> {{ pokemon.caracteristicas.height / 10 }} m</p>
        <p><strong>Weight:</strong> {{ pokemon.caracteristicas.weight / 10 }} kg</p>
        <p><strong>Abilities:</strong> {{ pokemon.caracteristicas.abilities }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonCard',
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },
  methods: {
    capitalize(name) {
      if (!name) return '';
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  }
}
</script>

<style scoped>
.pokemon-card {
  background-color: #FFDE00; /* Pokémon Yellow */
  border: 4px solid #3B4CCA; /* Pokémon Blue */
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 20px;
  transition: transform 0.2s, box-shadow 0.2s;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.pokemon-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

.pokemon-image {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
}

.card-title {
  color: #CC0000;
  text-shadow: 2px 2px white;
  margin-bottom: 5px;
  font-family: 'Press Start 2P', cursive;
}

.characteristics p {
  margin: 0;
  color: #2a348b;
  font-size: 0.9rem;
}
</style>