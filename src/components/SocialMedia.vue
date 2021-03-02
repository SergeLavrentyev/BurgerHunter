<template>
  <ul class="social-media__list">
    <li class="social-media__item" v-for="(link, index) in socialLinks" :key="index">
      <a :href="link.href" class="social-media__link">
        <img :src="link.img" :alt="link.name" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      socialLinks: [
        {
          name: "vk",
          href: "#",
          img: require("../assets/images/vk.svg"),
        },
        {
          name: "instagram",
          href: "#",
          img: require("../assets/images/instagram.svg"),
        },
        {
          name: "facebook",
          href: "#",
          img: require("../assets/images/fb.svg"),
        },
      ],
    };
  },
};
</script>