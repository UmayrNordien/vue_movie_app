<template>
    <div>
      <h2>Search Results for "{{ query }}"</h2>
      <SearchResults :searchQuery="query" />
    </div>
  </template>
  
  <script>
  import SearchResults from '@/components/SearchResults.vue';
  export default {
    components: {
      SearchResults,
    },
    props: ['query'],
  };
  </script>
  