import { createStore } from 'vuex'

export default createStore({
  state: {
    personajes: [
      { id: "1", nombre: "pikachu", descripcion: "lorem ipsum uhiuhiuhihoi" },
      { id: "2", nombre: "kakuna", descripcion: "lorem ipsum uhiuhiuhihoi" },
      { id: "3", nombre: "beedrill", descripcion: "lorem ipsum uhiuhiuhihoi" },
      { id: "4", nombre: "metapod", descripcion: "lorem ipsum uhiuhiuhihoi" },
      { id: "5", nombre: "rattata", descripcion: "lorem ipsum uhiuhiuhihoi" }
    ]
  },
  getters: {
    personajes: state => state.personajes
  },
  mutations: {},
  actions: {},
  modules: {}
})
