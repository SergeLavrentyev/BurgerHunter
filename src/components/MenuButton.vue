<template>
  <button class="menu-button">
    <span class="line line--top"></span>
    <span class="line line--mid"></span>
    <span class="line line--bottom"></span>
  </button>
</template>

<style lang="less">
@import (reference) "@/less/_variables";
.menu-button {
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  padding: 0;
  background-color: transparent;
  border: none;

  .line {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: @main-color;
    width: 1.2rem;
    height: 0.15rem;

    &--top {
      top: 0.2rem;
    }

    &--mid {
      top: 0.55rem;
    }

    &--bottom {
      bottom: 0.2rem;
    }
  }
}
</style>