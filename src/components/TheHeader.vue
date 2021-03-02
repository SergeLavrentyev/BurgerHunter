<template>
  <header class="header container">
    <slot></slot>
  </header>
</template>

<style lang="less">
@import (reference) '@/less/_variables';
.header {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  .h-flex();
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}
</style>