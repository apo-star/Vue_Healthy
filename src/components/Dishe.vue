<script setup lang="ts">
defineProps<{ title: string; subtitle: string; text: string; img: string }>();
</script>

<template>
  <article class="dishe">
    <picture>
      <img class="dishe__img" :src="img" />
    </picture>
    <p class="dishe__title">{{ title }}</p>
    <p class="dishe__subtitle">{{ subtitle }}</p>
    <p class="dishe__text">{{ text }}</p>
    <footer class="dishe__footer"></footer>
  </article>
</template>

<style lang="scss" scoped>
.dishe {
  &__title {
    font-size: rem(32);
    color: var(--color-subtitle);
  }
  &__img {
    width: 100%;
  }
}
</style>
