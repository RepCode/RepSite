<template>
  <div id="app">
    <NavBar :routes="navbarRoutes">
      <Logo />
    </NavBar>
    <router-view />
    <Footer :links="footerLinks" />
  </div>
</template>

<script>
import NavBar from './components/nav-bar/NavBar';
import Logo from './components/Logo.vue';
import Footer from './components/footer/Footer.vue';
import InfoModule from './data/info';

const siteName = 'Repsite';
export default {
  components: {
    NavBar,
    Logo,
    Footer,
  },
  data() {
    return {
      navbarRoutes: InfoModule.navbarRoutes,
      footerLinks: InfoModule.footerLinks,
    };
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
@import '@/__shared.scss';

body {
  background: black;
  margin: 0;
}

#app {
  font-family: Consolas, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white-color;
  font-size: 16px;
  @include tablet {
    font-size: 18px;
  }
}

.page-content {
  width: 90%;
  margin: 120px auto 70px auto;
  text-align: justify;
  min-height: 360px;
  @include tablet {
    width: 80%;
    margin: 180px auto;
  }
  @include desktop {
    margin: 200px auto;
  }
  @include large {
    width: 65%;
    margin: 220px auto;
  }
}
</style>
