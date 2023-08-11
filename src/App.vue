<template>
  <!-- <nav>
    <router-link to="/">Login</router-link> |
    <router-link to="/dashboard">My Movies</router-link> |


  </nav> -->
  <router-view/>
</template>

<style>
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
