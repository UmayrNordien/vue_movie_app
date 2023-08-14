<template>
  <LoginNavBar/>
  <div class="bg">
    <div class="about-view">
      <div class="container">
        <h2 class="about-title">Welcome to the Movie App</h2>
  
        <div class="features-container">
          <div class="column">
            <h4 class="heading">App Features:</h4>
            <ul class="list">
              <li class="item">Login Page with Route Guard</li>
              <li class="item">Trending Carousel</li>
              <li class="item">Popular Movies (region based)</li>
              <li class="item">Single Page Movie View with more details and feature to Rate Movies</li>
              <li class="item">Search through all Movies and the ability to see more details as well as rate them</li>
            </ul>
          </div>
  
          <div class="column">
            <h4 class="heading">Dependencies used:</h4>
            <ul class="list">
              <li class="item">Axios</li>
              <li class="item">Bootstrap</li>
              <li class="item">Boxicons</li>
              <li class="item" style="text-decoration: line-through;">Core-js</li>
              <li class="item" style="text-decoration: line-through;">Dotenv</li>
              <li class="item">Node-fetch</li>
              <li class="item">Vue</li>
              <li class="item">Vue-router</li>
              <li class="item">Vuex</li>
            </ul>
          </div>
  
          <div class="column">
            <h4 class="heading">Upcoming Features:</h4>
            <ul class="list">
              <li class="item">Logout</li>
              <li class="item">Register Accounts</li>
              <li class="item">More categories as well as TV show specific View</li>
              <li class="item">Save Movie to watchlist</li>
            </ul>
          </div>
  
          <div class="column">
            <h4 class="heading">Sources:</h4>
            <ul class="list">
              <li class="item"><a href="https://www.youtube.com/watch?v=6LyagkoRWYA" target="_blank">Axios Crash Course</a></li>
              <li class="item"><a href="https://www.youtube.com/watch?v=mrJ-mK8shYQ" target="_blank">Error Handling Tutorial</a></li>
              <li class="item"><a href="https://www.youtube.com/watch?v=nFh7-HfODYY" target="_blank">Vuex Store Tutorial</a></li>
              <li class="item"><a href="https://mycolor.space/?hex=%23845EC2&sub=1" target="_blank">Colors used</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
    <FooterC/>
  </template>
  
  <script>
  import LoginNavBar from '@/components/LoginNavBar.vue';
  import FooterC from '@/components/FooterC.vue';
  
  export default {
    components: {
      LoginNavBar,
      FooterC
    },
  };
  </script>
  
  <style scoped>
  .bg {
    height: 100vh;
    margin: 0;
    padding: 0;
    background: linear-gradient(to bottom, #845EC2, #D65DB1, #FF6F91, #FF9671, #FFC75F, #F9F871) !important;
  }
  .about-view {
    padding: 20px;
    font-weight: 600;
  }
  
  .about-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .container{
    margin-top: 10vh;
  }
  .features-container {
    margin-top: 10vh;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .column {
    flex: 1;
    min-width: 250px;
  }
  
  .heading {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .list {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  .item {
    font-size: 16px;
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {
  .about-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 0px;
  }
  .bg {
    height: 100vh;
  }

  .features-container {
    margin-top: 5vh;
    gap: 0px;
  }

  .item {
    font-size: 12px;
    margin-bottom: 5px;
  }
}
  </style>
  