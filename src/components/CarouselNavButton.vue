<template>
  <button class="carousel-nav__button"></button>
</template>

<style lang="less">
@import (reference) "@/less/_variables.less";
.carousel-nav__button {
  width: 1rem;
  height: 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: @inactive-slider-btn;

  &--active {
    width: 1.1rem;
    height: 1.1rem;
    background-color: @main-color;
  }
}
</style>