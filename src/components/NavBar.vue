<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <router-link class="navbar-brand logo" to="/">Movie App</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard">My Movies</router-link>
            </li>
          </ul>
          <form class="d-flex mx-auto" @submit.prevent="performSearch">
        <input
          v-model="searchQuery"
          class="form-control me-2"
          type="search"
          placeholder="Search for movies..."
          aria-label="Search"
        />
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form>
        </div>
      </div>
    </nav>
    <router-view/>
  </template>
  
    
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
      };
    },
    methods: {
      performSearch() {
        // Navigate to the SearchResults route with the search query
        this.$router.push({ name: 'SearchResultsView', params: { query: this.searchQuery } });
      },
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    background: linear-gradient(to right, #845EC2, #2C73D2, #0081CF, #0089BA, #008E9B, #008F7A);
  }
  
  .navbar-nav .nav-link{
    color: #fff !important;
  }
  .navbar-nav .nav-link:hover{
    color: #e7e7e7 !important;
  }
  .logo{
    color: #fff !important;
  }
  .logo:hover{
    color: #e7e7e7 !important;
  }

  input{
    box-shadow: inset 5px 4px 9px 2px rgba(51, 51, 51, 0.192);
  }
  </style>