<template>
  <LoginNavBar/>
    <div class="login-form-view">
      <LoginForm />
    </div>
  </template>
  
  <script>
  import LoginNavBar from '@/components/LoginNavBar.vue'
  import LoginForm from '@/components/LoginForm.vue';
  
  export default {
    components: {
      LoginNavBar,
      LoginForm,
    },
  };
  </script>
  
  <style scoped>
  </style>
  
  