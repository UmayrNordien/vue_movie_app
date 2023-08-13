<template>
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
// ref source: https://www.youtube.com/watch?v=6LyagkoRWYA (axios crash course)
import axios from 'axios';
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const username = ref('');
    const password = ref('');

    const store = useStore();
    const router = useRouter();

    async function login() {
      try {
        // Step 1: Obtain a request token
        const requestTokenResponse = await axios.get(
          'https://api.themoviedb.org/3/authentication/token/new',
          {
            params: {
              api_key: '9b20927a47ae51d08b26f61dab9b2ce4',
            }
          },
        );
        const requestToken = requestTokenResponse.data.request_token;

        // Step 2: Validate request token with login
        await axios.post(
          'https://api.themoviedb.org/3/authentication/token/validate_with_login',
          {
            username: username.value,
            password: password.value,
            request_token: requestToken,
          },
          {
            params: {
              api_key: '9b20927a47ae51d08b26f61dab9b2ce4',
            },
          }
        );

        // Step 3: Create a session ID
        const createSessionResponse = await axios.post(
          `https://api.themoviedb.org/3/authentication/session/new?api_key=9b20927a47ae51d08b26f61dab9b2ce4`,
          {
            request_token: requestToken,
          }
        );
        const sessionID = createSessionResponse.data.session_id;

        // Update session ID in Vuex store
        store.dispatch('updateSessionID', sessionID);

        // Redirect to dashboard
        router.push('/dashboard');
      } catch (error) {
        console.error('Login error:', error);
      }
    }

    return {
      username,
      password,
      login,
    };
  },
};
</script>


<style scoped>
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
  box-shadow: inset 5px 4px 9px 2px rgba(51, 51, 51, 0.192);
  border: none;
  border-radius: 4px;
  width: 100%;
}
.login-form input {
  padding: 8px;
  margin-bottom: 16px;
  box-shadow: inset 5px 4px 9px 2px rgba(51, 51, 51, 0.192);
  border: none;
  border-radius: 4px;
  width: 100%;
}
.login-form input:focus{
  border: none;
  outline: none
}

.login-form button {
  padding: 8px 16px;
  background: linear-gradient(to right, #845EC2, #2C73D2, #0081CF, #0089BA, #008E9B, #008F7A);
  color: #fff;
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
  
  