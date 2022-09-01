<template>
  <div id="nav">
    <AppHeader />
    <router-view />
  </div>
</template>

<script>
  import AppHeader from "@/components/AppHeader.vue";
  export default {
    components: { AppHeader },
  };
</script>

<style>
  body {
    background-color: #202124;
    color: #f5f5f5;
  }
  #app {
    font-family: 'Roboto','Avenir','Helvetica','Arial','sans-serif';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* color: #2c3e50; */
  }
  @media (min-width: 600px) {
    .grid_wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }
  }
  @media (min-width: 1000px) {
    .grid_wrapper {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  input, textarea {
    font-family: 'Merriweather', 'serif';
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li,
  li a {
    text-decoration: none;
    list-style: none;
    color: inherit;
  }

  img {
    max-width: 100%;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    padding: 0;
    color: #f5f5f5;
  }
  button:hover, 
  li:hover {
    color: rgb(108,108,241);
  }

  .image-upload-wrapper,
  .text-input-wrapper {
    text-align: left;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: inset 1px 1px 2px 2px #252727;
    border-radius: 3px;
  }
</style>
