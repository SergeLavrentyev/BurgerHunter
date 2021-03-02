<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style lang="less">
@import (reference) "@/less/_variables.less";

.button {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-radius: 0.5rem;
  border: none;
  color: @font-color;
  font-size: 1em;
  font-weight: bold;
}
</style>