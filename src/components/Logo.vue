<template>
  <div class="logo">
    <div class="letters-container">
      <img
        class="logo-letters"
        alt="Rep Logo"
        src="../assets/logo-letters.png"
      />
    </div>
    <div class="cursor-container">
      <img
        class="logo-cursor"
        alt="Rep Logo Cursor"
        src="../assets/logo-cursor.png"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Logo extends Vue {}
</script>

<style lang="scss" scoped>
.logo {
  min-width: 80px;
  display: flex;
  float: right;
  margin: 5% 0;
  .letters-container {
    flex: 4;
    margin-bottom: 8%;
    .logo-letters {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .cursor-container {
    flex: 2;
    .logo-cursor {
      width: 100%;
      height: 100%;
      max-height: 55px;
      padding: 10px 0;
      object-fit: contain;
      animation: blink 1s linear infinite alternate;
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
