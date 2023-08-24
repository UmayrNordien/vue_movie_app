import { createRouter, createWebHistory } from 'vue-router';  // HTML5 Mode ?ref source: https://router.vuejs.org/guide/essentials/history-mode.html
//* Components
import LoginFormView from '@/views/LoginFormView.vue';
import MovieListView from '@/views/MovieListView.vue';
import MovieDetailView from '@/views/MovieDetailView.vue';
import SearchResultsView from '@/views/SearchResultsView.vue'; // Adjust the import path
import AuthCallbackView from '@/views/AuthCallbackView.vue';
import AboutView from '@/views/AboutView';
//* Component for Route Guard 
import store from '@/store';

const routes = [  // route configurations
  {
    path: '/',
    name: 'Login',
    component: LoginFormView,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: MovieListView,
    meta: { requiresAuth: true }, // Add a meta field for route guard
  },
  {
    path: '/movie/:id', // Dynamic parameter for movie id 
    name: 'MovieDetail',
    component: MovieDetailView,
    props: true,  // Applied Routes with named views and dynamic route parameters
  },              //? ref source https://router.vuejs.org/guide/essentials/passing-props.html
  {
    path: '/search-results/:query', // Dynamic parameter for the query
    name: 'SearchResultsView',
    component: SearchResultsView,
    props: true, // Pass route params as props to the component
  },
  {
    path: '/auth-callback',
    name: 'AuthCallback',
    component: AuthCallbackView,
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView,
  },
];  // NOTE* tried adding a catch and callback for incorrect routes to handle 404 errors but got Maximum call stack size exceeded loop error instead

const router = createRouter({   // router instance is created using createRouter
  history: createWebHistory(process.env.BASE_URL),  //  base URL is used as the root path for all your routes
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isLoggedIn) {
    next('/');  //! Redirect to the login page if the user is not authenticated
  } else {
    next();     // next route
  }
});

export default router;



