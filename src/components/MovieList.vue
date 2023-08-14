<template>
  <div class="bg">
    <NavBar />
    <TrendingMovies />

    <div class="movie-list mt-5">
      <div v-for="movie in movies" :key="movie.id" class="movie-card">
        <router-link :to="{ name: 'MovieDetail', params: { id: movie.id } }">
          <div class="movie-poster">
            <img :src="getMoviePosterUrl(movie.poster_path)" alt="Movie Poster" />
          </div>
          <div class="movie-title">{{ movie.title }}</div>
        </router-link>
      </div>
    </div>

    <!-- Load More button -->
    <button @click="loadMoreMovies" class="load-more-button mb-2 me-2"><i class='bx bx-loader bx-tada'></i> More</button>
    <button class="load-more-button" id="reloadButton">Top Results</button>
  </div>
</template>
  
<script>
import axios from 'axios';
import NavBar from '@/components/NavBar.vue'; 
import TrendingMovies from '@/components/TrendingMovies.vue'; 

export default {
  components: {
    NavBar,
    TrendingMovies ,
  },
  data() {
    return {
      movies: [],
      page: 1, // page variable
    };
  },
  async created() {
    await this.fetchMovies();

    document.getElementById("reloadButton").addEventListener("click", () => {
      location.reload();
    });
  },
  methods: {
    async fetchMovies() {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular',
          {
            params: {
              api_key: '9b20927a47ae51d08b26f61dab9b2ce4',
              session_id: this.$store.getters.getSessionID,
              page: this.page,
            },
          }
        );

        this.movies = response.data.results;
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    },
    async loadMoreMovies() {
      this.page++; // Increment the page number
      await this.fetchMovies(); // Fetch and append new movies
    },
    getMoviePosterUrl(posterPath) {
      if (posterPath) {
        return `https://image.tmdb.org/t/p/w500${posterPath}`;
      }
      return 'path/to/default-poster.png'; // Use a default image if poster path is not available
    },
  },
};
</script>
  
<style scoped>
body{
  background-color: #F9F871;
}
.bg {
  background: linear-gradient(to bottom, #845EC2, #D65DB1, #FF6F91, #FF9671, #FFC75F, #F9F871);
}

.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.movie-card {
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 0 10px;   /* Equal padding on the sides */
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.movie-card:hover {
  transform: scale(1.05);
}

.movie-poster img {
  width: 100%;
  max-height: 100%; 
  object-fit: cover;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .movie-card {
    margin: 0 5px;
  }
  .movie-list {
    gap: 10px; 
  }
}

.movie-title {
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
}

.load-more-button {
  margin-top: 20px;
  padding: 10px 20px;
  background: linear-gradient(to right, #845EC2, #2C73D2, #0081CF, #0089BA, #008E9B, #008F7A);
  color: white;
  border: none;
  border-radius: 8px;
}

.load-more-button:hover {
  background: linear-gradient(to right, #A998E8, #4E96E6, #00A4E3, #00ACD2, #00B1B2, #00B190);
}
</style>
  