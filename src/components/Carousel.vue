<template>
  <div class="carousel">
    <slot></slot>
  </div>
</template>

<style lang="less">
@import (reference) "@/less/_variables.less";

.carousel {
  .v-flex();
  width: 100%;
  .padding();
  background-image: radial-gradient(
    40% 40% at center 39%,
    rgba(252, 0, 255, 0.37) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>