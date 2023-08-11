<template>
    <LoginNavBar/>
    <div>
      <form @submit.prevent="login" class="login-form">
        <label for="username">Username:</label>
        <input v-model="username" type="text" id="username" />
  
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" />
  
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  import LoginNavBar from '@/components/LoginNavBar.vue';
  
  export default {
    components: {
      LoginNavBar
    },
    setup() {
      const username = ref('');
      const password = ref('');
  
      const store = useStore();
      const router = useRouter();
  
      const apiKey = '9b20927a47ae51d08b26f61dab9b2ce4'; // TMDb API Key
  
      const login = async () => {
        try {
          const authUrl = `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`;
  
          const response = await axios.get(authUrl);
          const requestToken = response.data.request_token;
  
          // Redirect the user to the TMDb authentication page
          const authRedirectUrl = `https://www.themoviedb.org/authenticate/${requestToken}`;
          window.location.href = authRedirectUrl;
  
          // After user authorization, TMDb will redirect back to your app
          // Handle the callback URL and get the authorized request token
          // Get the authorized request token from the URL query parameter
          const urlSearchParams = new URLSearchParams(window.location.search);
          const authorizedRequestToken = urlSearchParams.get('request_token');
  
          // create a session ID using the authorized request token
          // source:
          // https://developer.themoviedb.org/reference/authentication-how-do-i-generate-a-session-id
          const sessionUrl = `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}`;
          const sessionResponse = await axios.post(sessionUrl, { request_token: authorizedRequestToken });
  
          const sessionID = sessionResponse.data.session_id;
  
          // Update the session ID in the Vuex store
          store.dispatch('updateSessionID', sessionID);
  
          // Redirect to the dashboard (movies) after login
          router.push('/dashboard');
        } catch (error) {
          console.error('Login error:', error);
        }
      };
  
      return {
        username,
        password,
        login,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Center the login form */
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0 auto;
    max-width: 300px;
  }
  
  .login-form label {
    margin-bottom: 8px;
    font-weight: bold;
  }
  
  .login-form input {
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
  }
  
  .login-form button {
    padding: 8px 16px;
    background: linear-gradient(to right, #845EC2, #2C73D2, #0081CF, #0089BA, #008E9B, #008F7A);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .login-form button:hover {
    background: linear-gradient(to right, #A998E8, #4E96E6, #00A4E3, #00ACD2, #00B1B2, #00B190);  
  }
  
  body {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f4f4f4;
  }
  </style>
  
  