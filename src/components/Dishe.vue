<script setup lang="ts">
import Button from "./Button.vue";
import Stars from "./Stars.vue";

defineProps<{ title: string; subtitle: string; text: string; img: string }>();
</script>

<template>
  <article class="dishe">
    <picture>
      <img class="dishe__img cover" :src="img" />
    </picture>
    <div class="dishe__content">
      <p class="dishe__title">{{ title }}</p>
      <p class="dishe__subtitle">{{ subtitle }}</p>
      <p class="dishe__text" v-html="text" />
      <footer class="dishe__footer">
        <div class="dishe__starts">
          <Stars />
          <p class="dishe__count-feedback">12</p>
        </div>
        <Button class-name="_small _grey" text="Order" />
      </footer>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.dishe {
  border-radius: rem(6);
  overflow: hidden;
  color: var(--color-light-gray);
  box-shadow: 0 rem(2) rem(5) 0 rgba(0, 0, 0, 0.1);
  background: var(--color-dark);
  opacity: 0;
  &__content {
    padding: rem(26) rem(30) rem(24);
  }
  &__title {
    font-size: rem(32);
    line-height: 93.75%;
    color: var(--color-subtitle);
    margin-bottom: rem(3);
    transform: translateX(rem(-200));
    opacity: 0;
  }
  &__subtitle {
    font-size: rem(12);
    line-height: 1.33;
    margin-bottom: rem(20);
    letter-spacing: -0.15px;
    opacity: 0;
  }
  &__text {
    font-size: rem(13);
    line-height: 1.38;
    letter-spacing: -0.162px;
    color: var(--color-dark-gray);
    margin-bottom: rem(21);
  }
  &__starts {
    display: flex;
    align-items: center;
    gap: rem(14);
  }
  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__count-feedback {
    font-size: rem(12);
    color: var(--color-philippine-silver);
  }
}
</style>
