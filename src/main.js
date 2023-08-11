import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Import the store
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'boxicons/css/boxicons.min.css';

createApp(App).use(store).use(router).mount('#app');
