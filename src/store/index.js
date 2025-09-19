import { createStore } from 'vuex'

export default createStore({
  state: {
    personajes: [],
    loading: false,
    error: null
  },
  getters: {
    personajes: state => state.personajes,
    isLoading: state => state.loading,
    hasError: state => !!state.error,
    getPokemonData: state => (name) => {
      return state.personajes.find(p => p.nombre === name);
    }
  },
  mutations: {
    setPersonajes(state, personajes) {
      state.personajes = personajes
    },
    setLoading(state, status) {
      state.loading = status
    },
    setError(state, error) {
      state.error = error
    }
  },
  actions: {
    async fetchPersonajes({ commit }) {
      commit('setLoading', true);
      commit('setError', null);
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        
        // Fetch detailed data for each Pokémon
        const pokemonPromises = data.results.map(async (pokemon) => {
          const detailResponse = await fetch(pokemon.url);
          const detailData = await detailResponse.json();
          return {
            id: detailData.id,
            nombre: detailData.name,
            imagen: detailData.sprites.front_default,
            caracteristicas: {
              height: detailData.height,
              weight: detailData.weight,
              base_experience: detailData.base_experience,
              abilities: detailData.abilities.map(a => a.ability.name).join(', ')
            }
          };
        });
        
        const personajes = await Promise.all(pokemonPromises);
        commit('setPersonajes', personajes);
      } catch (error) {
        commit('setError', 'An error occurred while fetching the Pokémon data.');
        console.error("Error fetching Pokémon:", error);
      } finally {
        commit('setLoading', false);
      }
    }
  },
  modules: {}
})