<template>
  <div id="app">
    <NavBar :routes="navBarRoutes">
      <Logo />
    </NavBar>
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/nav-bar/NavBar';
import Logo from './components/Logo.vue';

const siteName = 'Repsite';
export default {
  data() {
    return {
      navBarRoutes: [
        {
          displayName: 'Code',
          path: '/code',
        },
        {
          displayName: 'Pics',
          path: '/pics',
        },
      ],
    };
  },
  components: {
    NavBar,
    Logo,
  },
  mounted() {
    const path = localStorage.getItem('path');
    if (path) {
      localStorage.removeItem('path');
      this.$router.push({ path: path });
    }
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

.page-content {
  width: 80%;
  margin: 100px auto;
}
</style>
