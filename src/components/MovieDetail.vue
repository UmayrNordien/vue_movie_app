<template>
    <div class="movie-details">
      <div class="movie-content">
        <div class="movie-poster">
          <img :src="getMoviePosterUrl(movie.poster_path)" alt="Movie Poster" />
        </div>
      </div>
      <div class="movie-title">{{ movie.title }}</div>
      <div class="movie-description">{{ movie.overview }}</div>
  
      <!-- Display the movie rating -->
      <div class="movie-rating">Rating: {{ movie.vote_average }}</div>
  
      <!-- Allow the user to input their own rating -->
      <div class="user-rating">
        <label for="rating">Your Rating:</label>
        <input v-model="userRating" type="number" min="1" max="5" id="rating" />
        <button @click="rateMovie">Rate</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        movie: {},
        userRating: 1,
      };
    },
    async created() {
      try {
        const movieId = this.$route.params.id;
        const sessionID = this.$store.getters.getSessionID;
  
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            params: {
              api_key: '9b20927a47ae51d08b26f61dab9b2ce4',
              session_id: sessionID,
            },
          }
        );
  
        this.movie = response.data;
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    },
    methods: {
      getMoviePosterUrl(posterPath) {
        if (posterPath) {
          return `https://image.tmdb.org/t/p/w500${posterPath}`;
        }
        return 'path/to/default-poster.png'; // Use a default image if poster path is not available
      },
      async rateMovie() {
        try {
          const movieId = this.$route.params.id;
          const guestSessionID = 'YOUR_GUEST_SESSION_ID'; // Replace with actual guest session ID
  
          const response = await axios.post(
            `https://api.themoviedb.org/3/movie/${movieId}/rating`,
            { value: this.userRating },
            {
              params: {
                api_key: '9b20927a47ae51d08b26f61dab9b2ce4',
                guest_session_id: guestSessionID,
              },
            }
          );
  
          if (response.status === 201) {
            console.log('Movie rated successfully');
            // Update the movie's average rating and userRating data
            this.movie.vote_average = response.data.rating;
            this.userRating = response.data.value;
          } else {
            console.error('Failed to rate the movie');
          }
        } catch (error) {
          console.error('Error rating movie:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  