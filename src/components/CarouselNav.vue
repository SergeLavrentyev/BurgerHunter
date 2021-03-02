<template>
  <div class="carousel-nav">
    <slot></slot>
  </div>
</template>

<style lang="less">
@import (reference) "@/less/_variables.less";
.carousel-nav {
  .h-flex();
  max-width: 6.75rem;
  width: 100%;
}
</style>