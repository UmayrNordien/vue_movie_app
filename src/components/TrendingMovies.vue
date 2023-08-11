<template>
    <div class="movie-carousel">
      <div id="trendingCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div
            v-for="(movie, index) in trendingMovies"
            :key="movie.id"
            :class="['carousel-item', index === 0 ? 'active' : '']"
          >
            <img :src="getMoviePosterUrl(movie.poster_path)" class="d-block w-100" alt="Movie Poster" />
            <div class="carousel-caption d-none d-md-block">
              <h5>{{ movie.title }}</h5>
              <p>{{ movie.overview }}</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#trendingCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#trendingCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </template>
  
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        trendingMovies: [],
      };
    },
    async created() {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/week',
          {
            params: {
              api_key: '9b20927a47ae51d08b26f61dab9b2ce4',
            },
          }
        );
  
        this.trendingMovies = response.data.results;
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    },
    methods: {
      getMoviePosterUrl(posterPath) {
        if (posterPath) {
          return `https://image.tmdb.org/t/p/w500${posterPath}`;
        }
        return 'path/to/default-poster.png';
      },
    },
  };
  </script>
  
  <style scoped>
  .movie-carousel {
    max-width: 100%;
    margin: 0 auto; /* Center the carousel */
  }
  
  .carousel-inner img {
    background-color: black;
    max-height: 420px;
    object-fit: contain;
  }
  
  .carousel-caption {
    background-color: rgba(0, 0, 0, 0.664); /* Add a semi-transparent background to the caption */
  }
  
  @media (max-width: 768px) {
    .movie-carousel {
      max-width: 90%;
    }
  
    .carousel-inner img {
      max-height: 200px;
    }
  }
  </style>
  
  