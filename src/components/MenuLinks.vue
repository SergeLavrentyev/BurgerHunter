<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-list__item" v-for="(link, index) in navLinks" :key="index">
        <a :href="link.href" class="nav-list__link">{{ link.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { navLinks } from "@/mixins/navLinks";

export default {
  mixins: [navLinks]
};
</script>

<style lang="less">
@import (reference) "@/less/_variables.less";
.nav {
  max-width: 25rem;
  width: 100%;
  &-list {
    .h-flex();
    &__link {
      font-size: 1.2em;
    }
  }
  
}
</style>