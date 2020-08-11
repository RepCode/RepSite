<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar';

const siteName = 'Repsite';
export default {
  components: {
    NavBar,
  },
  watch: {
    $route(to) {
      document.title = to.meta.title || siteName;
    },
  },
};
</script>

<style lang="scss">
body {
  background: black;
  margin: 0;
}

#app {
  font-family: Consolas, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
