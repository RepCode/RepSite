<template>
  <div class="page-content presentation">
    <p>
      <b>Hi there,</b><br />my name is Martín Pereira Nuñez, but I usually go by
      some variant of <b>Rep</b> in the online world.
    </p>
    <p>
      I am a <b>Software Developer</b> and I am close to getting a degree in
      <b>Electrical Engineering</b>.
    </p>
    <p>
      My passion for technology relies on pushing forward <b>challenging</b> and
      <b>meaningful</b> projects, so feel free to reach me out if you think you
      have one of those I could help with. I consider myself an extremely
      flexible developer, having worked on all kind of fields in the Software
      Development world. You can read more about that on the
      <router-link class="code-link" :to="{ path: '/code' }">Code</router-link>
      section.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>

<style lang="scss">
@import '@/__shared.scss';

.presentation {
  text-align: justify;
  @include tablet {
    width: 75%;
  }
  @include desktop {
    width: 70%;
  }
  @include large {
    width: 45%;
  }
}

.code-link {
  color: $purple-primary;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
}
</style>
