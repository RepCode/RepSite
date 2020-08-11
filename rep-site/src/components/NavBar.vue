<template>
  <div class="nav-bar">
    <div class="logo">
      <router-link :to="'/'">
        <img
          class="logo-letters"
          alt="Rep Logo"
          src="../assets/logo-letters.png"
          @click="navigateHome"
        />
      </router-link>
      <img class="logo-cursor" alt="Rep Logo" src="../assets/logo-cursor.png" />
    </div>
    <div class="nav-items-container">
      <template v-for="(route, index) in routes">
        <div
          :key="`foot-print-${index}`"
          :style="navItemStyleObject(index)"
          class="nav-item foot-print"
        >
          <span>{{ route.displayName }}</span>
        </div>
        <router-link :to="route.path" :key="`${index}`">
          <div
            :style="navItemStyleObject(index)"
            class="nav-item"
            :class="{ 'clicked-nav-item': routes[index].active }"
            @click="setActive(index)"
          >
            <span>{{ route.displayName }}</span>
          </div>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export class NavItem {
  displayName = '';
  routeName?: string;
  path = '';
  active? = false;
}

@Component
export default class NavBar extends Vue {
  private selectedIndex: number | null = null;
  private routes: Array<NavItem> = [
    {
      displayName: 'Code',
      path: '/code',
    },
    {
      displayName: 'Pics',
      path: '/pics',
    },
  ];
  created() {
    const index = this.routes.findIndex(x => this.$route.path === x.path);
    if (index !== -1) {
      this.selectedIndex = index;
      this.routes[index].active = true;
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
  public setActive(index: number) {
    if (this.selectedIndex !== null) {
      const oldIndex = this.selectedIndex as number;
      this.routes[oldIndex].active = false;
      Vue.set(this.routes, oldIndex, this.routes[oldIndex]);
    }
    this.routes[index].active = true;
    Vue.set(this.routes, index, this.routes[index]);
    this.selectedIndex = index;
  }
  public navItemStyleObject(index: number) {
    console.log('asd');
    const position = this.routes.length - index;
    return {
      'margin-left': `calc(100% - ${position} *
        calc(50px + 2vw) - ${position * 3}%)`,
    };
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  position: fixed;
  top: 0;
  height: auto;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
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
    width: 80%;
    object-fit: contain;
    cursor: pointer;
  }
  .logo-cursor {
    margin-left: 15px;
    width: 2px;
    object-fit: contain;
    animation: blink 1s linear infinite alternate;
  }
}
.nav-items-container {
  width: 100%;
  margin-right: 3%;
  align-items: center;
  position: relative;
  .nav-item {
    position: absolute;
    height: 100%;
    width: calc(50px + 2vw);
    color: white;
    cursor: pointer;
    float: left;
    display: flex;
    align-items: center;
    font-size: calc(22px + 1vw);
    color: #6567ff;
    transition: margin-left 300ms cubic-bezier(0, 1.01, 0.68, 0.72);
    &.foot-print {
      color: #b3b4f5;
      opacity: 0.8;
      cursor: default;
    }
    &.clicked-nav-item {
      color: #3923cc;
      margin-left: 15px !important;
      cursor: default;
      span {
        text-align: left;
      }
    }
    span {
      text-align: center;
      width: 100%;
    }
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
