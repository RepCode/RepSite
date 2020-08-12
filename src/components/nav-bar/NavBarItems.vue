<template>
  <div class="nav-items-container">
    <template v-for="(route, index) in routes">
      <div
        :key="`foot-print-${index}`"
        :style="getStyleObject(index)"
        :class="[
          'nav-item',
          'foot-print',
          { 'foot-print-hidden': !route.active },
        ]"
      >
        <span>{{ route.displayName }}</span>
      </div>
      <div
        :key="`${index}`"
        :style="getStyleObject(index)"
        :class="['nav-item', 'link', { 'clicked-nav-item': route.active }]"
        @click="routeClick(index)"
      >
        <span>{{ route.displayName }}</span>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import { NavItem } from './nav-item';

export class UiNavItem extends NavItem {
  public styleObject: Record<string, string> | null = null;
}

@Component
export default class NavBarItems extends Vue {
  @Prop({ required: true })
  routes!: Array<UiNavItem>;
  @Prop() navItemWidth!: string;
  @Emit('route-click')
  public routeClick(index: number): number {
    return index;
  }
  public getStyleObject(index: number) {
    if (this.routes[index].styleObject) {
      return this.routes[index].styleObject;
    }
    const position = this.routes.length - index;
    const style = {
      width: this.navItemWidth,
      'margin-left': `calc(100% - ${position} *
        ${this.navItemWidth} - ${position * 3}%)`,
    };
    this.routes[index].styleObject = style;
    return style;
  }
}
</script>

<style lang="scss" scoped>
$click-animation-duration: 300ms;

.nav-items-container {
  width: 100%;
  height: 100%;
  position: relative;
  align-items: center;
  .nav-item {
    position: absolute;
    float: left;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: calc(22px + 1vw);
    &.link {
      color: #9598fc;
      transition: margin-left $click-animation-duration
        cubic-bezier(0, 1.01, 0.68, 0.72);
      span {
        cursor: pointer;
      }
      &:hover {
        animation: item-hover 200ms ease-in 1;
      }
      &.clicked-nav-item {
        color: #5053cc;
        margin-left: 15px !important;
        font-weight: 600;
        animation: none;
        span {
          cursor: default;
          text-align: left;
        }
      }
    }
    &.foot-print {
      color: #babbdb;
      opacity: 0.4;
      &.foot-print-hidden {
        opacity: 0;
        transition: opacity 0ms linear $click-animation-duration;
      }
    }
    span {
      text-align: center;
      width: 100%;
    }
  }
}

@keyframes item-hover {
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(-7%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
