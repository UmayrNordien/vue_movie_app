<template>
    <NavBar />
    <div class="content-container">
      <div class="movie-list bg">
        <div v-for="movie in searchResults" :key="movie.id" class="movie-card">
          <router-link :to="{ name: 'MovieDetail', params: { id: movie.id } }">
            <div class="movie-poster">
              <img :src="getMoviePosterUrl(movie.poster_path)" alt="Movie Poster" />
            </div>
            <div class="movie-title">{{ movie.title }}</div>
          </router-link>
        </div>
      </div>
    </div>
  </template>
    
  <script>
  import axios from 'axios';
  import NavBar from '@/components/NavBar.vue';
  
  export default {
    components: {
      NavBar,
    },
    props: ['searchQuery'],
    data() {
      return {
        searchResults: [],
      };
    },
    methods: {
      async fetchSearchResults() {
        try {
          const response = await axios.get(
            'https://api.themoviedb.org/3/search/movie',
            {
              params: {
                api_key: '9b20927a47ae51d08b26f61dab9b2ce4',
                query: this.searchQuery,
              },
            }
          );
  
          this.searchResults = response.data.results;
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      },
      getMoviePosterUrl(posterPath) {
        if (posterPath) {
          return `https://image.tmdb.org/t/p/w500${posterPath}`;
        }
        return 'path/to/default-poster.png'; // Use a default image if poster is not available
      },
    },
    watch: {
      searchQuery: {
        handler: 'fetchSearchResults',
        immediate: true, // Fetch results immediately when the component is created
      },
    },
  };
  </script>
    
  <style scoped>
  .content-container {
    padding-top: 5px;
    /* Add padding to create space between NavBar and content */
    background-color: #845EC2;
  }
  
  .bg {
    background: linear-gradient(to bottom, #845EC2, #D65DB1, #FF6F91, #FF9671, #FFC75F, #F9F871);
  }
  
  .movie-list {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }
  
  .movie-card {
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    padding: 10px;
    margin: 0 10px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }
  
  .movie-card:hover {
    transform: scale(1.05);
  }
  
  .movie-poster img {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .movie-title {
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
  }
  </style>
    