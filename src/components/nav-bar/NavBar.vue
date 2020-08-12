<template>
  <div class="nav-bar">
    <div class="logo">
      <router-link :to="'/'">
        <img
          class="logo-letters"
          alt="Rep Logo"
          src="../../assets/logo-letters.png"
          @click="navigateHome"
        />
      </router-link>
      <img
        class="logo-cursor"
        alt="Rep Logo"
        src="../../assets/logo-cursor.png"
      />
    </div>
    <div class="nav-items-section">
      <NavBarItems
        v-on:route-click="routeClick"
        :routes="routes"
        :navItemWidth="'calc(50px + 2vw)'"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { NavItem } from './nav-item';
import NavBarItems from './NavBarItems.vue';

@Component({ components: { NavBarItems } })
export default class NavBar extends Vue {
  @Prop({ required: true })
  routes!: Array<NavItem>;
  private selectedIndex: number | null = null;
  @Watch('$route')
  routeChange() {
    const index = this.routes.findIndex(x => this.$route.path === x.path);
    if (index !== -1 && !this.routes[index].active) {
      this.selectedIndex = index;
      this.routes[index].active = true;
      Vue.set(this.routes, index, this.routes[index]);
    }
  }
  public navigateHome() {
    if (this.selectedIndex !== null) {
      const index = this.selectedIndex as number;
      this.routes[index].active = false;
      Vue.set(this.routes, index, this.routes[index]);
      this.selectedIndex = null;
    }
  }
  public routeClick(index: number) {
    if (this.selectedIndex !== null) {
      const oldIndex = this.selectedIndex as number;
      this.routes[oldIndex].active = false;
      Vue.set(this.routes, oldIndex, this.routes[oldIndex]);
    }
    this.routes[index].active = true;
    Vue.set(this.routes, index, this.routes[index]);
    this.selectedIndex = index;
    this.$router.push({ path: this.routes[index].path });
  }
}
</script>

<style lang="scss" scoped>
$click-animation-duration: 300ms;

.nav-bar {
  position: fixed;
  top: 0;
  height: auto;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
}
.nav-items-section {
  position: relative;
  width: 100%;
  margin-right: 3%;
}
.logo {
  left: 0;
  min-width: 80px;
  width: 8%;
  margin-left: 3%;
  display: flex;
  padding: 1% 0;
  align-items: center;
  .logo-letters {
    width: 70%;
    object-fit: contain;
  }
  .logo-cursor {
    margin-left: 8px;
    width: 2px;
    height: 80%;
    object-fit: contain;
    animation: blink 1s linear infinite alternate;
  }
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
