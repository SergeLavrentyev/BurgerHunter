<template>
  <div class="product carousel__slide">
    <img
      class="product__image"
      alt="carousel-product"
    />
    <div class="product__description">
      <h2 class="product__title">Чики дог</h2>
      <span class="product__price">250 P</span>
      <div class="product__text">
        Чизбургер. Классика - Говяжья котлета, сыр Чеддер, бекон, свежие овощи,
        соус барбекю и конечно же, свежая булочка.
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import (reference) "@/less/_variables.less";
.product {
  .v-flex();
  font-family: @product-font;

  &__image {
    width: 20rem;
  }

  &__description {
    position: relative;
    .h-flex(center);
    flex-wrap: wrap;
    top: -6rem;
    margin-bottom: -3rem;
    width: 20rem;
  }

  &__title {
    font-size: @title-size;
    line-height: 2em;
    font-weight: bold;
    letter-spacing: 0.05em;

    text-transform: uppercase;
    text-shadow: @text-shadow;
  }

  &__price {
    display: block;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-weight: 600;
    background-color: @accent-color;
  }

  &__text {
    margin: 0;
    font-size: 1em;
    line-height: 1.5em;
    flex-basis: 100%;
  }
}
</style>