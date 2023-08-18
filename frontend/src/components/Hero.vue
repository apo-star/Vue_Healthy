<script setup lang="ts">
import Button from "./Button.vue";
</script>

<template>
  <section class="hero">
    <p class="hero__text">
      HEALTHY SWITCHER chefs do&nbsp;all the prep work, like peeling, chopping
      &amp;&nbsp;marinating, so&nbsp;you can cook a&nbsp;fresh homemade dinner
      in&nbsp;just 15&nbsp;minutes.
    </p>
    <div class="hero__button">
      <Button text="Order Now" className="_big" />
    </div>
    <ul class="hero__list hero-list">
      <li>
        <img class="hero-list__icon" src="../assets/images/icons/clock.svg" />
        <p class="hero-list__title">
          Today&nbsp;10:00&nbsp;am&nbsp;&mdash; 7:00&nbsp;pm
        </p>
        <p class="hero-list__text">Working hours</p>
      </li>
      <li>
        <img
          class="hero-list__icon"
          src="../assets/images/icons/location.svg"
        />
        <p class="hero-list__title">Velyka Vasylkivska 100</p>
        <p class="hero-list__text">Get Directions</p>
      </li>
      <li>
        <img class="hero-list__icon" src="../assets/images/icons/phone.svg" />
        <a class="hero-list__title" href="tel:+380638332415"
          >+38 (063)833 24 15</a
        >
        <p class="hero-list__text">Call Online</p>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("../assets/images/hero.png") no-repeat 100% 0;
  aspect-ratio: 1440 / 1080;
  background-size: cover;
  margin: 0 auto;
  margin-top: rv(-92);
  &__text {
    margin-top: rv(-65);
    max-width: rv(595);
    text-align: center;
    margin-bottom: rv(42);
    font-size: erm(16);
    line-height: 1.62;
    letter-spacing: rv(-0.02);
    color: rgba($color: var(--color-white-rgba), $alpha: 0.7);
  }
  &__button {
    margin-bottom: rv(70);
  }
}

.hero-list {
  display: grid;
  grid-template-columns: repeat(3, rv(245));
  gap: rv(90);
  text-align: center;
  color: var(--color-white);
  &__icon {
    display: block;
    margin: 0 auto;
    width: rv(18);
    height: rv(18);
    margin-bottom: rv(16);
    object-fit: cover;
  }
  &__title {
    font-weight: 400;
    font-size: rv(16);
    line-height: 1.88;
    text-align: center;
    color: var(--color-white);
    margin-bottom: rv(5);
  }
  &__text {
    font-weight: 400;
    font-size: rv(14);
    line-height: 1;
    color: rgba($color: var(--color-white-rgba), $alpha: 0.5);
  }
}
</style>
