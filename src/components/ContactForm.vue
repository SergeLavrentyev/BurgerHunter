<template>
  <form class="contact-form">
    <fieldset>
      <legend class="contact-form__title">Написать нам</legend>
      <label class="contact-form__label">
        <input type="text" class="contact-form__input" />
      </label>
      <label class="contact-form__label">
        <input type="text" class="contact-form__input" />
      </label>
      <label class="contact-form__label">
        <input type="text" class="contact-form__input" />
      </label>
    </fieldset>
    <button class="button contact-form__button">Отправить</button>
  </form>
</template>

<style lang="less">
@import (reference) "@/less/_variables.less";
.contact-form {
  .padding();
  border-radius: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background-color: @secondary-color;

  fieldset {
    border: none;
    padding-left: 0;
    padding-right: 0;
  }

  &__title {
    font-size: 1.5em;
    margin-bottom: 1rem;
  }

  &__label {
    display: block;
    width: 100%;
    padding-bottom: 1rem;
  }

  &__input {
    width: 100%;
  }

  &__button {
    background-color: @main-btn-color;
  }
}
</style>