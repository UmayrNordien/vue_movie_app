<template>
    <div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const store = useStore(); // Import the store
      const router = useRouter(); // Import the router
  
      handleCallback();
  
      async function handleCallback() {
        const apiKey = '9b20927a47ae51d08b26f61dab9b2ce4';
        const urlSearchParams = new URLSearchParams(window.location.search);
        const authorizedRequestToken = urlSearchParams.get('request_token');
        console.log('Authorized Request Token:', authorizedRequestToken);
  
        if (authorizedRequestToken) {
          try {
            const sessionUrl = `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}`;
            const sessionResponse = await axios.post(sessionUrl, { request_token: authorizedRequestToken });
  
            const sessionID = sessionResponse.data.session_id;
  
            // Update the session ID in your Vuex store
            store.dispatch('updateSessionID', sessionID);
  
            // Redirect to the dashboard after successful login
            router.push('/dashboard');
          } catch (error) {
            console.error('Session creation error:', error);
          }
        }
      }
  
      return {};
    },
  };
  </script>
  
  <style scoped>
  </style>
  
    