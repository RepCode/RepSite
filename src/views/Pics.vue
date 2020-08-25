<template>
  <div class="page-content">
    Oops, still working on this one. But you can checkout my
    <a class="code-link" :href="instaLink" target="_blank">Instagram</a> and my
    <a class="code-link" :href="lomographyLink" target="_blank">lomography</a>
    profiles for some pics!
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import InfoModule from '../data/info';

@Component
export default class Pics extends Vue {
  instaLink = InfoModule.footerLinks.filter(
    x => x.iconClass === 'icon-instagram',
  )[0].link;
  lomographyLink = InfoModule.lomographyLink;
}
</script>

<style lang="scss" scoped></style>
