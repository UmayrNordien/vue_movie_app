<template>
  <LoginNavBar />
  <div class="movie-details mt-5">
    <div class="movie-content">
      <div class="movie-poster">
        <img :src="getMoviePosterUrl(movie.poster_path)" alt="Movie Poster" />
      </div>
      <div class="movie-info">
        <div class="movie-title">{{ movie.title }}</div>
        <div class="movie-description">{{ movie.overview }}</div>

        <div class="reviews">
          <h2>Reviews</h2>
          <ul>
            <li v-for="review in reviews" :key="review.id">
              <div class="review-author">{{ review.author }}</div>
              <div class="review-content">{{ review.content }}</div>
            </li>
          </ul>
      </div>

        <div class="movie-rating">Rating: {{ movie.vote_average }} / 10</div>
        <div class="user-rating">
          <label for="rating">Your Rating:</label>
          <input v-model="userRating" type="number" min="1" max="10" id="rating" />
          <button @click="rateMovie">Rate</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginNavBar from '@/components/LoginNavBar.vue';

export default {
  components: {
    LoginNavBar,
  },
  data() {
    return {
      movie: {},
      userRating: 5,
      guestSessionID: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjIwOTI3YTQ3YWU1MWQwOGIyNmY2MWRhYjliMmNlNCIsInN1YiI6IjVjZTI3YjkzYzNhMzY4MTkwNDIyODI1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9EicqaZVVqjhNiopSD-qD_2uuPC9YepXKf-JR_AR9ds', // Replace with your actual bearer token
    };
  },
  async created() {
    try {
      const movieId = this.$route.params.id;

      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        {
          headers: {
            accept: 'application/json',
            Authorization: this.guestSessionID,
          },
        }
      );

      const movieData = await response.json();
      this.movie = movieData;
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

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/rating`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              accept: 'application/json',
              Authorization: this.guestSessionID,
            },
            body: JSON.stringify({ value: this.userRating }),
          }
        );

        const responseData = await response.json();

        if (response.status === 201) {
          console.log('Movie rated successfully');
          this.movie.vote_average = responseData.rating;
          this.userRating = responseData.value;
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
.movie-details {
  padding: 20px;
}

.movie-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.movie-poster img {
  max-width: 80%;
  height: auto;
}

.movie-info {
  margin-top: 20px;
  text-align: center;
}

.movie-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.movie-description {
  font-size: 16px;
  margin-bottom: 10px;
}

.movie-rating {
  font-size: 18px;
  margin-bottom: 10px;
}

.user-rating {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

input[type="number"] {
  width: 50px;
  padding: 5px;
  margin-bottom: 10px;
}

button {
  padding: 8px 16px;
  background: linear-gradient(to right, #845EC2, #2C73D2, #0081CF, #0089BA, #008E9B, #008F7A);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover{
  background: linear-gradient(to right, #A998E8, #4E96E6, #00A4E3, #00ACD2, #00B1B2, #00B190);  
}

@media (min-width: 768px) {
  .movie-content {
    flex-direction: row;
    align-items: flex-start;
  }

  .movie-poster {
    flex: 1;
    margin-right: 20px;
  }

  .movie-info {
    flex: 2;
    text-align: left;
  }
}

.reviews {
  margin-top: 20px;
}

.reviews h2 {
  font-size: 20px;
  font-weight: bold;
}

.review-author {
  font-weight: bold;
  margin-bottom: 5px;
}

.review-content {
  font-size: 14px;
}
</style>
