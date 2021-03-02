<template>
  <div class="footer-nav__navigation">
    <h3 class="footer__title">{{ navTitle }}</h3>
    <ul class="footer-list">
      <li
        class="footer-list__item"
        v-for="(link, index) in navLinks"
        :key="index"
      >
        <a :href="link.href" class="footer-list__link">{{ link.name }}</a>
      </li>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['nav-links', 'nav-title']
};
</script>