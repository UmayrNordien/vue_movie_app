<template>
    <div>
    </div>  <!--// TODO placement for loader-->
  </template>
  
  <script>
  //? ref source: https://www.simplilearn.com/tutorials/javascript-tutorial/callback-function-in-javascript
  //? ref source: https://developers.google.com/looker-studio/connector/auth
  //? ref source: https://www.tabnine.com/code/javascript/functions/%40auth0%2Fnextjs-auth0/ISignInWithAuth0/handleCallback
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
        const authorizedRequestToken = urlSearchParams.get('request_token'); // getting the request token upon login
        console.log('Authorized Request Token:', authorizedRequestToken);    // checking if I got the token
  
        if (authorizedRequestToken) {
          try {
            const sessionUrl = `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}`;
            const sessionResponse = await axios.post(sessionUrl, { request_token: authorizedRequestToken });
  
            const sessionID = sessionResponse.data.session_id; // uses the request token and exchanges it for a session ID
  
            
            store.dispatch('updateSessionID', sessionID);      // Update the session ID in your Vuex store
  
            
            router.push('/dashboard');                         // Redirect to the dashboard after successful login
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
  
    