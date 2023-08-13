<template>
  <!-- <nav>
    <router-link to="/">Login</router-link> |
    <router-link to="/dashboard">My Movies</router-link> |
  </nav> -->
  <router-view/>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@1,700&display=swap');
/* colors used - https://mycolor.space/?hex=%23845EC2&sub=1 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #353535;
}

/* Styling links */
/* unvisited link */

a{
  font-family: "Poppins", sans-serif;
  text-decoration: none !important;
  font-weight: bold;
  text-transform: uppercase;
  color:#353535 !important;
}

/* a:link {
  color: red;
} */

/* visited link */
/* a:visited {
  color: green;
} */

/* mouse over link */
/* a:hover {
  color: hotpink;
} */

/* selected link */
/* a:active {
  color: blue;
} */
</style>
