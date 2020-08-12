<template>
  <div class="nav-bar">
    <div class="logo-section">
      <router-link :to="'/'" @click="navigateHome">
        <slot></slot>
      </router-link>
      <!-- <router-link :to="'/'">
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
      /> -->
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
    if (this.selectedIndex !== null) {
      this.clearSelected();
    }
    if (index !== -1 && !this.routes[index].active) {
      this.setSelected(index);
    }
  }
  public navigateHome() {
    if (this.selectedIndex !== null) {
      this.clearSelected();
    }
  }
  public routeClick(index: number) {
    if (this.selectedIndex === index) {
      return;
    }
    if (this.selectedIndex !== null) {
      this.clearSelected();
    }
    this.setSelected(index);
    this.$router.push({ path: this.getCurrent().path });
  }
  private clearSelected() {
    const index = this.selectedIndex as number;
    this.routes[index].active = false;
    Vue.set(this.routes, index, this.routes[index]);
    this.selectedIndex = null;
  }
  private setSelected(index: number) {
    this.routes[index].active = true;
    Vue.set(this.routes, index, this.routes[index]);
    this.selectedIndex = index;
  }
  private getCurrent(): NavItem {
    return this.routes[this.selectedIndex as number];
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

.logo-section {
  margin-left: 3%;
  cursor: pointer;
  flex: 8;
}

.nav-items-section {
  position: relative;
  width: 100%;
  flex: 100;
}
</style>
