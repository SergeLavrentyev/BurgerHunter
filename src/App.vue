<template>
  <router-view></router-view>
</template>

<style lang="less">
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap");
@import (reference) "./less/_variables.less";

body {
  margin: 0;
  font-family: @main-font;
}

a {
  text-decoration: none;
  color: @font-color;
}

ul {
  padding-left: 0;
  margin: 0;
}

li {
  list-style-type: none;
}

html {
  box-sizing: border-box;
}

main {
  overflow: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

img {
  max-width: 100%;
}

.container {
  max-width: 76.25rem;
  width: 100%;
  padding-left: 3rem;
  padding-right: 3rem;
  margin: 0 auto;
}
</style>