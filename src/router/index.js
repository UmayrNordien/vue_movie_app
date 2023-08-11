import { createRouter, createWebHistory } from 'vue-router';
import LoginFormView from '@/views/LoginFormView.vue';
import MovieListView from '@/views/MovieListView.vue';
import MovieDetailView from '@/views/MovieDetailView.vue';
import SearchResultsView from '@/views/SearchResultsView.vue'; // Adjust the import path
import AuthCallbackView from '@/views/AuthCallbackView.vue';
// For Route Guard 
// import store from '@/store';

const routes = [
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
    path: '/movie/:id',
    name: 'MovieDetail',
    component: MovieDetailView,
    props: true,
  },
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Route guard to check if the user is authenticated before accessing a route
// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth && !store.getters.isLoggedIn) {
//     // Redirect to the login page if the user is not authenticated
//     next('/');
//   } else {
//     // Proceed to the next route
//     next();
//   }
// });

export default router;

