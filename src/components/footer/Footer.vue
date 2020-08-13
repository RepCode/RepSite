<template>
  <div class="footer">
    <div class="icons-container">
      <div class="icon-box" v-for="(link, index) in links" :key="index">
        <a
          :class="['icon', link.iconClass]"
          v-on:mouseover="setInfoString(index)"
          :href="link.link"
          target="_blank"
        ></a>
      </div>
    </div>
    <div class="link-info">{{ info }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { FooterLink } from './footer-link';

@Component
export default class Footer extends Vue {
  @Prop({ required: true })
  links!: Array<FooterLink>;
  public info = '';
  setInfoString(index: number) {
    this.info = this.links[index].displayString;
  }
}
</script>

<style lang="scss" scoped>
@import '@/__shared.scss';

.footer {
  padding: 5%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: 65px;
  @include tablet {
    width: 70%;
  }
  @include desktop {
    width: 50%;
  }
  @include large {
    width: 40%;
    height: 50px;
  }
}

.link-info {
  margin-top: 3%;
  color: $white-color;
  @include large {
    margin-top: 5%;
  }
}
.icon-box {
  flex: 1;
  height: 36px;
}
.icons-container {
  display: flex;
  align-items: center;
  .icon {
    text-decoration: none;
    text-align: center;
    &:before {
      cursor: pointer;
      color: $purple-primary;
      font-size: 32px;
    }
    &:hover {
      &:before {
        animation: link-hover 120ms ease-in 1;
      }
    }
    &:active {
      &:before {
        animation: link-click 120ms ease-out 1;
        opacity: 0.8;
      }
    }
  }
}

@keyframes link-hover {
  0% {
    font-size: 32px;
  }
  50% {
    font-size: 34px;
  }
  100% {
    font-size: 32px;
  }
}

@keyframes link-click {
  0% {
    font-size: 32px;
  }
  50% {
    font-size: 30px;
  }
  100% {
    font-size: 32px;
  }
}
</style>
