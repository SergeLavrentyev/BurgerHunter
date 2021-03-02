<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-nav">
        <slot></slot>
        <footer-nav
          :nav-links="navLinks"
          :nav-title="titles.navigation"
        ></footer-nav>
        <footer-nav :nav-title="titles.contacts" :nav-links="contactLinks">
          <social-media></social-media>
        </footer-nav>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterNav from "@/components/FooterNav";
import SocialMedia from "@/components/SocialMedia";

import { navLinks } from "../mixins/navLinks";

export default {
  mixins: [navLinks],
  components: {
    "footer-nav": FooterNav,
    "social-media": SocialMedia,
  },
  data() {
    return {
      contactLinks: [
        {
          name: "40 лет победы 14, г. Тольятти",
          href: "#"
        },
        {
          name: "+7 (987) 654 32 10",
          href: "#"
        },
      ],
      titles: {
        navigation: "Навигация",
        contacts: "Коньакты",
      },
    };
  },
};
</script>

<style lang="less">
@import (reference) "@/less/_variables.less";
.footer {
  .padding();
  color: @font-color;
  background: @bg-gradient;

  &__title {
    position: relative;
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.2em;
    line-height: 1.8em;
    font-weight: 600;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 98%;
      height: 0.125rem;
      background-color: @main-color;
    }
  }

  &-nav {
    &__navigation {
      padding-top: 2rem;
    }
  }

  &-list {
    .v-flex(flex-start, flex-start);
    min-height: 5rem;
    font-size: 1em;
    line-height: 1.5em;
    .social-media__list {
      margin-top: 2rem;
    }
  }
}
</style>