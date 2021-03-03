<template>
  <div id="app">
    <the-header>
      <logo></logo>
      <menu-links v-show-at:pc></menu-links>
      <menu-button v-show-at:mobile></menu-button>
    </the-header>
    <section class="hero-section">
      <div class="container">
        <div class="row">
          <div
            class="hero-section__content col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"
          >
            <h1 class="hero-section__title">burger hunter</h1>
            <p class="hero-section__subtitle">Бургер-Бар из Тольятти</p>
            <p class="hero-section__text">
              Присоединяйся к нам, и попробуй настоящие бургеры!!!
            </p>
            <base-button class="hero-section__button"> Заказать </base-button>
          </div>
          <carousel class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <product></product>
            <carousel-nav>
              <carousel-nav-button
                v-for="(button, index) in 5"
                :key="button"
                :class="index === 0 ? 'carousel-nav__button--active' : ''"
              ></carousel-nav-button>
            </carousel-nav>
          </carousel>
        </div>
      </div>
    </section>
    <section class="about-us">
      <div class="container">
        <img
          src="../assets/images/about.png"
          alt="about"
          class="about-us__image"
        />
        <div class="about-us__content">
          <h2 class="about-us__title">кто мы</h2>
          <p class="about-us__text">
            Мы открыли Бургер-бар в 2020 году с единственной целью: сделать
            вкусные бургеры по самым популярным мировым рецептам доступными в г.
            Тольятти. Мы внимательно относимся к качеству нашей кухни и
            используем только свежие и качественные продукты. Наши сочные
            котлеты приготовлены исключительно на углях, нежные булочки
            выпекаются в печи, а собственные соусы прекрасно дополняют вкусовые
            свойства наших сандвичей!
          </p>
        </div>
      </div>
    </section>
    <section class="social-media">
      <div class="container">
        <h2 class="social-media__title">Найдите Нас В Соц. Сетях</h2>
        <p class="social-media__text">Будьте в курсе наших акций и новостей</p>
        <social-media></social-media>
        <div class="hashtags">
          <a href="#" class="hashtag">#Акции</a>
          <a href="#" class="hashtag">#Новости</a>
        </div>
      </div>
    </section>
    <section class="cuisine">
      <div class="container">
        <img
          src="../assets/images/bbq.png"
          alt="cuisine"
          class="cuisine__image"
        />
        <div class="cuisine__content">
          <h2 class="cuisine__title">наши блюда</h2>
          <p class="cuisine__text">
            Кроме бургеров в нашем меню вы сможете найти блюда на любой вкус -
            большой выбор закусок, салатов, мясных блюд и многого другого!
            Добавьте к этому подходящий напиток из нашего большого бара и
            обязательно оставьте место для десерта.
          </p>
          <button class="cuisine__button button">Посмотреть меню</button>
        </div>
      </div>
    </section>
    <section class="business-info">
      <iframe
        class="map"
        style="width: 100%; border: none"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.828336260069!2d49.36410281599932!3d53.54297926766528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4168797360848e99%3A0xd91da44efd0b1314!2sBurger%20Hunter!5e0!3m2!1sen!2sru!4v1614596518997!5m2!1sen!2sru"
        allowfullscreen=""
        loading="lazy"
      >
      </iframe>
      <div class="container">
        <div class="schedule">
          <h2 class="schedule__title">Часы работы</h2>
          <p class="schedule__time">пн−вс: 11:00−00:00</p>
          <div class="hashtags">
            <a href="" class="hashtag">#Бургер-бар</a>
            <a href="" class="hashtag">#Доставка</a>
            <a href="" class="hashtag">#Самовывоз</a>
          </div>
        </div>
      </div>
    </section>
    <section class="contact-us">
      <div class="container">
        <div class="form-wrapper">
          <contact-form></contact-form>
        </div>
      </div>
    </section>
    <the-footer> </the-footer>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import Logo from "@/components/Logo";
import Menulinks from "@/components/MenuLinks";
import MenuButton from "@/components/MenuButton";
import BaseButton from "@/components/BaseButton";
import Carousel from "@/components/Carousel";
import Product from "@/components/Product";
import CarouselNav from "@/components/CarouselNav";
import CarouselNavButton from "@/components/CarouselNavButton";
import SocialMedia from "@/components/SocialMedia";
import ContactForm from "@/components/ContactForm";
import TheFooter from "@/components/TheFooter";

export default {
  components: {
    TheHeader,
    Logo,
    "menu-links": Menulinks,
    MenuButton,
    Carousel,
    BaseButton,
    Product,
    CarouselNav,
    CarouselNavButton,
    SocialMedia,
    ContactForm,
    TheFooter,
  },
};
</script>


<style lang="less">
@import (reference) "@/less/_variables.less";
@import "@/less/_grid.less";

.hero-section {
  padding-top: 5rem;
  color: @font-color;
  background: @bg-gradient;

  &__content {
    .padding();
  }

  &__title {
    font-size: @main-title-size;
    line-height: 3em;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
  }

  &__subtitle {
    margin: 0;
    font-size: 1.2em;
    line-height: 1.8em;
    font-weight: 600;
  }

  &__text {
    font-size: 1em;
    line-height: 1.5em;
  }

  &__button {
    background-color: @main-btn-color;
    letter-spacing: 0.05em;
  }
}
.about-us {
  .padding();
  background-color: @secondary-color;

  &__content {
    padding-bottom: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    color: @font-color;
    border-radius: 0.5rem;
    background-color: @accent-color;
  }

  &__title {
    margin-top: 0;
    font-size: @title-size;
    line-height: 2.55em;
    text-transform: capitalize;
  }

  &__text {
    margin: 0;
    font-weight: 500;
    font-size: 1em;
    line-height: 1.5em;
  }
}

.social-media {
  .padding();
  color: @font-color;
  background-image: url("../assets/images/social-media.png");
  background-size: cover;
  background-position: -15rem center;
  background-repeat: no-repeat;

  &__title {
    font-size: @title-size;
    text-shadow: @text-shadow;
  }

  &__text {
    margin-bottom: 5rem;
    text-shadow: @text-shadow;
    font-size: 1em;
    line-height: 1.5em;
  }

  &__list {
    .h-flex();
    max-width: 5rem;
    width: 100%;
    margin-bottom: 3rem;
  }
}
.cuisine {
  .padding();
  background-color: @secondary-color;

  &__content {
    padding-bottom: 2rem;
  }

  &__title {
    margin: 0;
    line-height: 2.55em;
    font-size: @title-size;
    text-transform: uppercase;
    font-weight: bold;
  }

  &__text {
    margin: 0;
    font-size: 1em;
    line-height: 1.5em;
    margin-bottom: 1.5em;
  }

  &__button {
    background-color: @accent-color;
  }
}

.business-info {
  .padding();
  background-color: @dark-color;

  .schedule {
    color: @font-color;

    &__title {
      margin: 0;
      line-height: 2.55em;
      font-size: @title-size;
      text-transform: capitalize;
    }

    &__text {
      margin: 0;
      font-size: 1em;
      line-height: 1.5em;
    }

    .hashtags {
      .v-flex(center, flex-start);
    }
  }
}

.contact-us {
  .padding();
  background-image: url("../assets/images/contact_bg.png");
  background-repeat: no-repeat;
  background-size: cover;

  .form-wrapper {
    margin: 0 auto;
    .padding();
    padding-left: 2rem;
    padding-right: 2rem;
    max-width: 20rem;
    width: 100%;

    background: radial-gradient(
      100% 325.5% at 0% 0%,
      #ffe8e0 0%,
      rgba(255, 232, 224, 0) 100%
    );
    backdrop-filter: blur(81px);

    border-radius: 1rem;
  }
}
</style>