import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App);
app.use(store);

// Dispatch the action to fetch Pokémon data when the app is created
store.dispatch('fetchPersonajes');

app.mount('#app');