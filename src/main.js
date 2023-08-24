import { createApp } from 'vue'; //root Vue application instance
import App from './App.vue';    // the root component
import router from './router';
import store from './store'; // Import the store
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'boxicons/css/boxicons.min.css';

createApp(App).use(store).use(router).mount('#app');    // mount the app instance to the DOM (index.html)
